import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  Username: string="";
  email: string="";
  password: string="";
  cpassword: string="";


  constructor(
    public afAuth : AngularFireAuth,
    public alert: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
  }
  
  async register(){
    const { Username, email, password, cpassword } = this
    if(password !== cpassword){
      this.showAlert("Error!", "Passwords don't match")
      return console.error("passwords, don't match")
      
    }
    try{
      const  res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      console.log(res)
      alert("click ok");
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
