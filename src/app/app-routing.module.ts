import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Modules
// ...

// Guards
// ...

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'home'
  // },
  {
    path: 'summoner',
    loadChildren: 'app/summoner-view/summoner-view.module#SummonerViewModule'
  },
  // TODO: Add error page in the future! :D+<
  // {
  //   path: 'error',
  //   loadChildren: 'app/error-view/error-view.module#ErrorViewModule'
  // },
  // {
  //   path: '**',
  //   redirectTo: 'error/404'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponents = [AppComponent];
