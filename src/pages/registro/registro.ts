import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  users = [];
reg=RegistroPage;
  usuarios=[
    {
      username:"",
      password:""
    }
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage) {
      this.storage.keys().then(keys => {
        if(keys.some(key=> key == 'usuario'))
        {
          this.storage.get('usuario').then(users => {this.users = JSON.parse(users)})
        }
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  clickAgregar(){
    this.usuarios.push();
    this.storage.set('usuario', JSON.stringify(this.users))
    this.navCtrl.pop()
  }
}
