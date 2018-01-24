import {
  Component,
  OnInit
} from '@angular/core';
import { SummonerService } from '../core/services/summoner.service';

@Component({
  selector: 'lol-summoner-view',
  templateUrl: 'summoner-view.component.html'
})

export class SummonerViewComponent implements OnInit {

  summoners: Array<USER.SummonerProfile>;

  constructor(
    private summonerService: SummonerService
  ) {}

  ngOnInit() {
    this.summonerService.getSummoners().subscribe(summoner =>  this.summoners = summoner);
  }
}
