import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nombre2PageRoutingModule } from './nombre2-routing.module';

import { Nombre2Page } from './nombre2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nombre2PageRoutingModule
  ],
  declarations: [Nombre2Page]
})
export class Nombre2PageModule {}
