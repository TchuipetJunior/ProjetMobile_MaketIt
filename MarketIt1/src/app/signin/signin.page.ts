import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  email: string ="";
  password: string="";

  constructor(
    public afAuth : AngularFireAuth,
    public alert: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
  }

  async add(){
    //alert("click ok");
    const { email, password } = this  
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      this.showAlert("Success", "Welcome abord!")
      this.router.navigate(['/tabs'])
    }catch(error){
        console.dir(error)
        this.showAlert("error", error.message)
    }
    }

    async showAlert(header: string, message: string){
      const alert = await this.alert.create({
        header,
        message,
        buttons: ["ok"]
      })
  
      await alert.present()
    }
  
}


