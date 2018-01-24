import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SummonerViewComponent } from './summoner-view.component';

const routes: Routes = [
  {
    path: '',
    component: SummonerViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummonerViewRoutingModule {}

export const routedComponents = [SummonerViewComponent];
