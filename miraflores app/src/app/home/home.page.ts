import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Username = '';
  password = '';

  constructor(public afAuth: AngularFireAuth, public alert: AlertController, private router: Router) {}

  async login() {
    const { Username, password } = this;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(Username, password);
      console.log('Inicio Exitoso');
      this.router.navigate(['tabs']);
    } catch (err) {
      console.dir(err);
      const alert = await this.alert.create({
        header: 'Inicio de Sesión',
        message: 'Error al iniciar sesión, verifique su correo y contraseña',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
