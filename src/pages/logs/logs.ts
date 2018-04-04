import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AjaxServicesProvider } from '../../providers/ajax-services/ajax-services';

/**
 * Generated class for the LogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logs',
  templateUrl: 'logs.html',
  providers: [AjaxServicesProvider]
})
export class LogsPage {
  
  domains: any;
  select_dominios: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ajaxServices: AjaxServicesProvider) {
    this.select_dominios = 'default';

    ajaxServices.getDomains().subscribe(data => {
      this.domains = data["env:Envelope"]["env:Body"]["amp:GetDomainListResponse"];
     
      console.log(this.domains);
    }, err => {
       console.log(err.message);
    });

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogsPage');
  }
  onChange(selectDominio){
    console.log(selectDominio);
}

}
