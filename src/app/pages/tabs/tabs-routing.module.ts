import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs/:chapter',
    component: TabsPage,
    children: [
      {
        path: ':path',
        loadChildren: () => import('../boilerplate/boilerplate.module').then(m => m.BoilerplatePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/default/init'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
