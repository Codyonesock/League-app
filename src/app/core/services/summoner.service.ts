import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SummonerService {

  private summoners: Array<USER.SummonerProfile>;

  constructor(
    private http: Http
  ) {}

  getSummoner(summoner: string) {
    return this.http.get(`api/summoner/${summoner}`)
      .map(summonerData => this.summoners = summonerData.json().data);
  }
}
