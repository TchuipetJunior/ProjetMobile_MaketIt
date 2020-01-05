import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  public produits = [];
  private emailActif: string;
  private email_vendeur: string;

  constructor(public afDB: AngularFireDatabase) { }

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
    return this.produits;
  }

  setEmailActif(email : string){
    this.emailActif = email;
  }

  getEmailActif(){
    return this.emailActif;
  }

  
  setEmailVendeur(email : string){
    this.email_vendeur = email;
  }

  getEmailVendeur(){
    return this.email_vendeur;
  }

}
