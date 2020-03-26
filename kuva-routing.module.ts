import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KuvaPage } from './kuva.page';

const routes: Routes = [
  {
    path: '',
    component: KuvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KuvaPageRoutingModule {}
