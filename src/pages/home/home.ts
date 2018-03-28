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

  constructor(public navCtrl: NavController, public ajaxServices: AjaxServicesProvider) {

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

  ionViewDidLoad(){
    this.ajaxServices.getVersion()
  }
   

  

}
