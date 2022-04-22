import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerplatePage } from './boilerplate.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerplatePageRoutingModule {}
