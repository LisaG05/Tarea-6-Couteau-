import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nombre2Page } from './nombre2.page';

const routes: Routes = [
  {
    path: '',
    component: Nombre2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nombre2PageRoutingModule {}
