import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NetworkPage } from '../network/network'; 
import { LogsPage } from '../logs/logs'; 
import { ServicesPage } from '../services/services'; 
import { ListPage } from '../list/list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
