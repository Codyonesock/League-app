const express = require('express');
const router = express.Router();
const nano = require('nano')('http://localhost:5984');
const { Kayn, REGIONS } = require('kayn')
const { api_key } = require('../../key');

const kayn = Kayn(api_key)({
  region: REGIONS.NORTH_AMERICA,
  debugOptions: {
      isEnabled: true,
      showKey: false,
      loggers: {},
  },
  requestOptions: {
      shouldRetry: true,
      numberOfRetriesBeforeAbort: 3,
      delayBeforeRetry: 1000,
      burst: false,
  },
  cacheOptions: {
      cache: null,
      ttls: {},
  },
});

var region, summonerName = '';

// Specified databases
const summonersDb = nano.db.use('summoners');

let response = {
  response: 200,
  data: [],
  message: null
};

const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Get all summoners
router.get('/summoners', (req, res) => {
  summonersDb.view('all_summoners', 'all', (err, body) => {
    if (err) {
      return sendError(err);
    }

    response.data = body.rows;
    res.json(response);

    return response;
  });
});

// Get single summoner
router.get(`/summoner/:user`, (req, res) => {
  // TODO: Set up region handler
  region = 'na1';
  summonerName = req.params.user;
  var summonerExist = false;

  summonersDb.view('all_summoners', 'all', (err, body) => {
    if (err) {
      return sendError(err);
    }

    summonerExist = body.rows.filter(user => user.value.name.toLowerCase() === summonerName.toLowerCase());

    if (Array.isArray(summonerExist) && summonerExist.length > 0) {
      response.data = [summonerExist[0].value];
      response.message = 'Data from DB';
      res.json(response);

      return response;
    } else {
      kayn.Summoner.by.name(summonerName).callback((err, data) => {
        if (err) {
          return sendError(err);
        }

        response.data = [data];
        response.message = 'Data from Riot API';
        res.json(response);

        summonersDb.insert(response.data[0], (err, body, header => {
          if (err) {
            return sendError(err);
          }
        }));

        return response;
      });
    }
  });
});

module.exports = router;
