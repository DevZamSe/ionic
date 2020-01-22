import { Component, OnInit } from '@angular/core';
import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus/ngx';

@Component({
  selector: 'app-makevideomascota',
  templateUrl: './makevideomascota.page.html',
  styleUrls: ['./makevideomascota.page.scss'],
})
export class MakevideomascotaPage implements OnInit {

  constructor(private videoCapturePlus: VideoCapturePlus) { }

  ngOnInit() {
  }

}
