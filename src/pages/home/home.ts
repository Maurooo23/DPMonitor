import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NetworkPage } from '../network/network'; 
import { LogsPage } from '../logs/logs'; 
import { ServicesPage } from '../services/services'; 
import { ListPage } from '../list/list';
import { AjaxServicesProvider } from '../../providers/ajax-services/ajax-services';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AjaxServicesProvider]
})
export class HomePage {
  firmware: string;
  uptime: string;
  ip: string;
  constructor(public navCtrl: NavController, public ajaxServices: AjaxServicesProvider) {
    ajaxServices.firmware().subscribe(data => {
      this.firmware = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"].FirmwareVersion.Version;
    }, err => {
      console.log(err.message);
    });
    ajaxServices.uptime().subscribe(data => {
      this.uptime = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"]["DateTimeStatus"].uptime2;
    }, err => {
      console.log(err.message);
    });
    this.ip = '127.0.0.1';  
  }
  goToNetwork(){
    this.navCtrl.push(NetworkPage);
  }
  goToLogs(){
    this.navCtrl.push(LogsPage);
  }
  goToServices(){
    this.navCtrl.push(ServicesPage);
  }
  goToLists(){
    this.navCtrl.push(ListPage);
  }
}
