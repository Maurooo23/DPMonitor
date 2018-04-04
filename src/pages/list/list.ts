import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AjaxServicesProvider } from '../../providers/ajax-services/ajax-services';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [AjaxServicesProvider]
})
export class ListPage {
  usuarios: any;

  constructor(public navCtrl: NavController, public ajaxServices: AjaxServicesProvider) {
    ajaxServices.getUsuarios().subscribe(data => {
      this.usuarios = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
     
      console.log(this.usuarios);
    }, err => {
       console.log(err.message);
    });
  }
}
