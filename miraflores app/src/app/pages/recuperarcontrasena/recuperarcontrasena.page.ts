import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperarcontrasena',
  templateUrl: './recuperarcontrasena.page.html',
  styleUrls: ['./recuperarcontrasena.page.scss'],
})
export class RecuperarcontrasenaPage implements OnInit {

  nombre: '';
  Username: '';

  constructor(public afAuth: AngularFireAuth, public alert: AlertController) { }

  ngOnInit() {
  }

  async recuperar() {
    const { Username, nombre } = this;
    if (nombre === ''){
      const alert = await this.alert.create({
        header: 'Error',
        message: 'Error el nombre está vacío',
        buttons: ['OK']
      });
      await alert.present();
    }
    try {
      const res = await this.afAuth.auth.sendPasswordResetEmail(Username);
      console.log(res);
    } catch (error) {
      console.dir(error);
    }
  }
}
