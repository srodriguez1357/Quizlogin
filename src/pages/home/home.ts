import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lin = LoginPage;
  sin = RegistroPage;

  usuarios=[
    {
      username:"",
      password:""
    }
  ];
  
  constructor(public navCtrl: NavController) {
    
   
  

  }

  clickLogin()
  {
    this.navCtrl.push(this.lin);
  }

  clickSignin(){
    this.navCtrl.push(this.sin);
  }
  
}
