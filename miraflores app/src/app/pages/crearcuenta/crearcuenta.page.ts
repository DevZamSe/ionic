import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {

  Username: '';
  password: '';
  cpassword: '';

  constructor(public afAuth: AngularFireAuth, public alert: AlertController) { }

  ngOnInit() {
  }

  async register() {
    const { Username, password, cpassword } = this;
    if (password !== cpassword) {
      const alert = await this.alert.create({
        header: 'Error',
        message: 'Error las contraseñas no coinciden.',
        buttons: ['OK']
      });
      await alert.present();
      return console.error('Las contraseñas no son iguales');
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(Username, password);
      console.log(res);
    } catch (error) {
      console.dir(error);
      const alert = await this.alert.create({
        header: 'Error',
        message: 'Error al crear nueva cuenta, está cuenta ya existe.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
