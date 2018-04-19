import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AjaxServicesProvider } from '../../providers/ajax-services/ajax-services';

/**
 * Generated class for the ServicesDetailsCountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services-details-count',
  templateUrl: 'services-details-count.html',
})
export class ServicesDetailsCountPage {
  servicio: any;
  tipo: any;
  dominio:any;
 durations: any;
 counts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ajaxServices: AjaxServicesProvider) {
  this.servicio = navParams.get('servicio');
  this.tipo = navParams.get('tipo');
  this.dominio = navParams.get('dominio');


    ajaxServices.getMessage(this.dominio,this.tipo,this.servicio).subscribe(data => {
      console.log(data)
      this.counts = data["MessageCounts"];
      this.durations = data["MessageDurations"];

     // console.log(this.servicesMpg);
    }, err => {
        console.log(err.message);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesDetailsCountPage');
  }

}
