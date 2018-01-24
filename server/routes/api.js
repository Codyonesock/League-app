const express = require('express');
const router = express.Router();
const nano = require('nano')('http://localhost:5984');

// Specified databases
const summoners = nano.db.use('summoners');

let response = {
  response: 200,
  data: []
};

const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

router.get('/summoners', (req, res) => {
  summoners.view('all_summoners', 'all', (err, body) => {
    if (err) {
      return sendError(err);
    }

    response.data = body.rows;
    res.json(response);

    return response;
  });
});

module.exports = router;
