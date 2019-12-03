import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
//import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  email: string ="";
  password: string="";

  constructor(
    public afAuth : AngularFireAuth
    //public afDB:AngularFireDatabase,
    //private firebaseAuthentication: FirebaseAuthentication
  ) {
    /*this.firebaseAuthentication.createUserWithEmailAndPassword('test@gmail.com', '123')
  .then((res: any) => console.log(res))
  .catch((error:any)=> console.error(error));*/
  }

 
  
ngOnInit(){}

  async add(){
    alert("click ok");
    /*this.afDB.list('Users').push({
      pseudo: 'lothbrook'*/
    const { email, password } = this  
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      

    }catch(err){
        console.dir(err)
    }
    }
  }
  


