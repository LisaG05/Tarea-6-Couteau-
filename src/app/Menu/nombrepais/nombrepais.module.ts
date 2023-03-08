import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NombrepaisPageRoutingModule } from './nombrepais-routing.module';

import { NombrepaisPage } from './nombrepais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NombrepaisPageRoutingModule
  ],
  declarations: [NombrepaisPage]
})
export class NombrepaisPageModule {}
