import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    ComponentsModule,
    PipesModule
  ],
  exports: [
    ComponentsModule,
    PipesModule
  ],
  declarations: [],
  providers: []
})
export class SharedModule {}
