import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SummonerService {

  summoners: Array<USER.SummonerProfile>;

  constructor(
    private http: Http
  ) {}

  getSummoners() {
    return this.http.get('api/summoners').map(summoner => this.summoners = summoner.json().data);
  }
}
