import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lol-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {

  public summonerInput: string;

  constructor(
    private router: Router
  ) {
    this.summonerInput = '';
  }

  public getSummoner($event: any) {
    this.summonerInput = $event.target.value;

    this.router.navigate(['summoner', this.summonerInput]);
  }
}
