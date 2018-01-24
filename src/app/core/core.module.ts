import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { SummonerService } from './services/summoner.service';

// Guards
import { isLoaded } from './guards/module-import-guard';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [],
  declarations: [],
  providers: [
    // Services
    SummonerService

    // Guards
    // ...
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() ParentModule: CoreModule ) {
    isLoaded(ParentModule, 'CoreModule');
  }
}
