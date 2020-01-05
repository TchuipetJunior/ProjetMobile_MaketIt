import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ProduitService } from '../services/produit.service';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 
  produits = [];
  categories = [];
  idcate = '';
  constructor(
    public afDB: AngularFireDatabase,
    public service : ProduitService,
    public alertCrtl : AlertController,
    public NavCrtl : NavController
  ) {
    this.getProduits();
    this.getCategories();
    }

    async Detail(produit: any){
      const alert =await this.alertCrtl.create({
        header: ' Detail du produit',
        message: "<br> <div><center> <img width=40 src="+produit.image+"> </center></div> <div>"+produit.description+"</div> <center><ion-button (click)=gotoChat(produit)>Contactez le vendeur</ion-button></center>",
      }); 
      await alert.present();
    }   

  getCategories() {
    this.afDB.list('Categories/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.categories = [];
      actions.forEach(action => {
        this.categories.push({
          key: action.key,
          id_cat: action.payload.exportVal().id_cat,
          description: action.payload.exportVal().description,
          name: action.payload.exportVal().name
         });
      });
    });
  }

  getProduits() {
    this.afDB.list('Produits/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.produits = [];
      actions.forEach(action => {
        this.produits.push({
          key: action.key,
          image:action.payload.exportVal().image,
          id_cat: action.payload.exportVal().id_cat,
          description: action.payload.exportVal().description,
          name: action.payload.exportVal().name,
          price: action.payload.exportVal().price,
          quantite: action.payload.exportVal().quantite,
          vendu: action.payload.exportVal().vendu,
          pseudo_vendeur: action.payload.exportVal().pseudo_vendeur,
          ville_vendeur: action.payload.exportVal().ville_vendeur
        });
      });
    });
  }


}