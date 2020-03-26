import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KuvaPageRoutingModule } from './kuva-routing.module';

import { KuvaPage } from './kuva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    KuvaPageRoutingModule
  ],
  declarations: [KuvaPage]
})
export class KuvaPageModule {}
