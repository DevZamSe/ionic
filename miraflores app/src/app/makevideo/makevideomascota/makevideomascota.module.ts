import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakevideomascotaPageRoutingModule } from './makevideomascota-routing.module';

import { MakevideomascotaPage } from './makevideomascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakevideomascotaPageRoutingModule
  ],
  declarations: [MakevideomascotaPage]
})
export class MakevideomascotaPageModule {}
