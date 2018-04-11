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

 networks : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ajaxServices: AjaxServicesProvider) {
   


function formatNumber (n) {
    	n = String(n).replace(/\D/g, "");
      n= n === '' ? n : Number(n).toLocaleString();
      return n;
    }
  


    ajaxServices.network().subscribe(data => {
      this.networks = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      for (let index = 0; index < this.networks.length; index++) {
        this.networks[index].RxHCPackets = formatNumber(this.networks[index].RxHCPackets)
        this.networks[index].TxHCPackets = formatNumber(this.networks[index].TxHCPackets)
        this.networks[index].showDetails = false;
        this.networks[index].icon = 'ios-arrow-dropdown-circle-outline';
      }
     
      console.log(this.networks);
    }, err => {
       console.log(err.message);
    });


  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkPage');
  }
  
  toggleDetails(network) {
    if (network.showDetails) {
        network.showDetails = false;
        network.icon = 'ios-arrow-dropdown-circle-outline';
    } else {
        network.showDetails = true;
        network.icon = 'ios-arrow-dropup-circle-outline';
    }
  }
}
