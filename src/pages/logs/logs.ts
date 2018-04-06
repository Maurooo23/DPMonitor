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
  logs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ajaxServices: AjaxServicesProvider) {
    this.select_dominios = 'default';

    ajaxServices.getDomains().subscribe(data => {
      this.domains = data["env:Envelope"]["env:Body"]["amp:GetDomainListResponse"];
     
      console.log(this.domains);
    }, err => {
       console.log(err.message);
    });

    ajaxServices.getLog(this.select_dominios).subscribe(data =>{
      this.logs = data["env:Envelope"]["env:Body"]["dp:response"]["dp:log"];
      for (let index = 0; index < this.logs.length; index++) {
        this.logs[index].showDetails = false;
        this.logs[index].icon = 'ios-arrow-dropdown-circle-outline';
      }

      console.log(this.logs);
    }, err => {
      console.log(err.message);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogsPage');
  }
  toggleDetails(log) {
    if (log.showDetails) {
        log.showDetails = false;
        log.icon = 'ios-arrow-dropdown-circle-outline';
    } else {
        log.showDetails = true;
        log.icon = 'ios-arrow-dropup-circle-outline';
    }
  }

  onChange(selectDominio){
    this.select_dominios = selectDominio;
    console.log(selectDominio);
    this.ajaxServices.getLog(this.select_dominios).subscribe(data =>{
      this.logs = data["env:Envelope"]["env:Body"]["dp:response"]["dp:log"];
      for (let index = 0; index < this.logs.length; index++) {
        this.logs[index].showDetails = false;
        this.logs[index].icon = 'ios-arrow-dropdown-circle-outline';
      }

      console.log(this.logs);
    }, err => {
      console.log(err.message);
    });

  }

}
