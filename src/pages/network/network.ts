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

  networks: any;
  interval: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ajaxServices: AjaxServicesProvider) {
    this.update()
  }

  update() {
    this.ajaxServices.network().subscribe(data => {
      this.networks = data["networks"];
      for (let index = 0; index < this.networks.length; index++) {
        this.networks[index].RxHCPackets = this.formatNumber(this.networks[index].RxHCPackets)
        this.networks[index].TxHCPackets = this.formatNumber(this.networks[index].TxHCPackets)
      }
      console.log(this.networks);
    }, err => {
      console.log(err.message);
    });
  }

  formatNumber (n) {
    n = String(n).replace(/\D/g, "");
    n= n === '' ? n : Number(n).toLocaleString();
    return n;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkPage');
    this.interval = setInterval(() => { 
      this.update();
    }, 1000);
  } 

  ionViewWillLeave() {
    clearInterval(this.interval)
    console.log("Alto")
  } 
}
