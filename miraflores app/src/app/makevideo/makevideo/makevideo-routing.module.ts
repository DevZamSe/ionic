import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakevideoPage } from './makevideo.page';

const routes: Routes = [
  {
    path: '',
    component: MakevideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakevideoPageRoutingModule {}
