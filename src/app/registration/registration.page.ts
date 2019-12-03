import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'

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

  constructor( public afAuth : AngularFireAuth) { }

  ngOnInit() {
  }

  async register(){
    const { Username, email, password, cpassword } = this
    if(password !== cpassword){
      return console.error("passwords, don't match")
    }
    try{
      const  res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      console.log(res)
    }catch(error){
        console.dir(error)
    }
      
  }

}
