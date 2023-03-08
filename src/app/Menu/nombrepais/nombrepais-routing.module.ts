import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NombrepaisPage } from './nombrepais.page';

const routes: Routes = [
  {
    path: '',
    component: NombrepaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NombrepaisPageRoutingModule {}
