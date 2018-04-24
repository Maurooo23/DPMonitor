import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServicesDetailsCountPage } from '../services-details-count/services-details-count';

/**
 * Generated class for the ServicesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services-details',
  templateUrl: 'services-details.html',
})
export class ServicesDetailsPage {
  listaServicios: any;
  tipo: any;
  dominio:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listaServicios = navParams.get('listaServicios');
    this.tipo = navParams.get('tipo');
    this.dominio = navParams.get('dominio');
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad ServicesDetailsPage');
  }
  
  goToDetailsCount(servicio: any,tipo:any,dominio:any){
    this.navCtrl.push(ServicesDetailsCountPage,{
      servicio: servicio,
      tipo: tipo,
      dominio:dominio
    })
  }
}
