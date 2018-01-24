import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SummonerViewRoutingModule, routedComponents } from './summoner-view-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SummonerViewRoutingModule,
    SharedModule
  ],
  exports: [
    SummonerViewRoutingModule
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [],
})
export class SummonerViewModule {}
