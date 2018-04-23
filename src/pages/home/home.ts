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
  select_dominios: any; 

  constructor(public navCtrl: NavController, public ajaxServices: AjaxServicesProvider) {
    this.select_dominios = ajaxServices.dp.url;
    this.update();
    this.ip = '127.0.0.1';
  }

  update() {
    console.log('obteniendo datos lindos')
    console.log(this.ajaxServices.dp.url)
    this.ajaxServices.firmware().subscribe(data => {
      console.log(data)
      this.firmware = data["version"]; 
    }, err => {
      console.log(err.message);
    });
    this.ajaxServices.uptime().subscribe(data => {
      //console.log(data);
      this.uptime = data["UptimeStatus"]["uptime2"];
    }, err => {
      console.log(err.message);
    });
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
  onChange(ips){
    this.ajaxServices.dp.setUrl(ips);
    this.update();
  }
}
