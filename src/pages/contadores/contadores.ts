import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contadores',
  templateUrl: 'contadores.html',
})
export class ContadoresPage {
  contadores: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contadores= navParams.get('contadores');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContadoresPage');
  }

}
