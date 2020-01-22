import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaCapture, MediaFile, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { Storage } from '@ionic/storage';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { NavController } from '@ionic/angular';

const MEDIA_FILES_KEY = 'mediaFiles';

@Component({
  selector: 'app-makevideo',
  templateUrl: './makevideo.page.html',
  styleUrls: ['./makevideo.page.scss'],
})
export class MakevideoPage implements OnInit {

  @ViewChild('myvideo', {static: false}) myVideo: any;
  mediaFiles = [];

  // tslint:disable-next-line: max-line-length
  constructor(public navCtrl: NavController, private mediaCapture: MediaCapture, private storage: Storage, private file: File, private media: Media) { }

  ionViewDidLoad() {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    });
  }

  capturevideo() {
    // tslint:disable: prefer-const
    let options: CaptureVideoOptions = {limit: 1, duration: 30};
    this.mediaCapture.captureVideo(options).then((res: MediaFile[]) => {
      let capturedFile = res[0];
      console.log('myFile', capturedFile);
      let fileName = capturedFile.name;
      // tslint:disable-next-line: no-string-literal
      let dir = capturedFile['localURL'].split('/');
      dir.pop();
      let fromDirectory = dir.join('/');
      let toDirectory = this.file.dataDirectory;

      // tslint:disable-next-line: no-shadowed-variable
      this.file.copyFile(fromDirectory, fileName, toDirectory, fileName).then(res => {
        let url = res.nativeURL.replace(/^file:\/\//, '');
        this.storeMediaFiles([{name: fileName, size: capturedFile, localURL: url}]);
      });
    });
  }

  play(myFile) {
    console.log('play', myFile);
    if (myFile.name.indexOf('.wav') > -1) {
    const audioFile: MediaObject = this.media.create(myFile.localURL);
    audioFile.play();
    } else {
      let path = this.file.dataDirectory + myFile.name;
      let url = path.replace(/^file:\/\//, '');
      let video = this.myVideo.nativeElement;
      video.src = url;
      video.play();
      }
  }

  storeMediaFiles(files) {
    console.log('store: ', files);
    this.storage.get(MEDIA_FILES_KEY).then(res => {
    if (res) {
    let arr = JSON.parse(res);
    arr = arr.concat(files);
    this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
    } else {
    this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files));
    }
    this.mediaFiles = this.mediaFiles.concat(files);
    });
  }

  ngOnInit() {
  }
}
