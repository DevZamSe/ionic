import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MakevideoPageRoutingModule } from './makevideo-routing.module';
import { MakevideoPage } from './makevideo.page';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    MakevideoPageRoutingModule,
  ],
  declarations: [MakevideoPage]
})
export class MakevideoPageModule {}
