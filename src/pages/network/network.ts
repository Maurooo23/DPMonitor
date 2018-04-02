import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AjaxServicesProvider } from '../../providers/ajax-services/ajax-services';

/**
 * Generated class for the NetworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-network',
  templateUrl: 'network.html',
  providers: [AjaxServicesProvider]
})
export class NetworkPage {

 /* network: string;*/

  constructor(public navCtrl: NavController, public navParams: NavParams, public ajaxServices: AjaxServicesProvider) {
   
    /*ajaxServices.network().subscribe(data => {
      this.network = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      console.log(this.network);
    }, err => {
       console.log(err.message);
    });*/

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkPage');
  }

}
