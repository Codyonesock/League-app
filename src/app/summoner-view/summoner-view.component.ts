import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Services
import { SummonerService } from '../core/services/summoner.service';

@Component({
  selector: 'lol-summoner-view',
  templateUrl: 'summoner-view.component.html'
})

export class SummonerViewComponent implements OnInit {

  public summoner$: Observable<any>;
  public summonerParam: string;

  constructor(
    private summonerService: SummonerService,
    private activatedRoute: ActivatedRoute
  ) {
    this.summonerParam = '';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.summoner$ = this.summonerService.getSummoner(params.summoner);
    });
  }
}
