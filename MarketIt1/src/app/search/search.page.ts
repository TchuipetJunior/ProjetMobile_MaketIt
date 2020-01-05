import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  listProduits = [];

  constructor(
    public produitService: ProduitService,
    public alertCrtl: AlertController,
    public navCrtl: NavController
  ) { }

  FiltreProduits(ev: any) {
    this.listProduits = this.produitService.getProduits();
    const val = ev.target.value;
    // tslint:disable-next-line: triple-equals
    if (val && val.trim() != '') {
      this.listProduits = this.listProduits.filter((item) => {
        return ((item.price.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.ville_vendeur.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }
  
  gotoChat(produit: any){

    const destinataire = produit.pseudo_vendeur;

  }
  
  async Detail(produit: any){
    const alert =await this.alertCrtl.create({
      header: ' Detail du produit',
      message: "<br> <div><center> <img width=40 src="+produit.image+"> </center></div> <div>"+produit.description+"</div> <center><ion-button (click)=gotoChat(produit)>Contactez le vendeur</ion-button></center>",
    }); 
    await alert.present();
  }  


}
