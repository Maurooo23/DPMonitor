import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listaServicios = navParams.get('listaServicios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesDetailsPage');
  }

}