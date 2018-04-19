import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServicesDetailsPage } from '../services-details/services-details';

import { AjaxServicesProvider } from '../../providers/ajax-services/ajax-services';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
  providers: [AjaxServicesProvider]
})
export class ServicesPage {

  servicesMpg : any;
  servicesWsg : any;
  servicesXmlf : any;
  servicesWafw : any;
  servicesXsl : any;
  domains: any;
  select_dominios: any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public ajaxServices: AjaxServicesProvider) {

     this.select_dominios = 'default';

    ajaxServices.getDomains().subscribe(data => {
     console.log(data)
      this.domains = data["Domain"];
     
    //  console.log(this.domains);
    }, err => {
       console.log(err.message);
    });

    ajaxServices.getServices(this.select_dominios).subscribe(data => {
     // console.log(data)
      this.servicesMpg = data["MultiProtocolGateway"];
      this.servicesWsg = data["WSGateway"];
      this.servicesXmlf = data["WebAppFW"];
      this.servicesXmlf = data["XMLFirewallService"];
      this.servicesXsl = data["XSLProxyService"];
     // console.log(this.servicesMpg);
    }, err => {
        console.log(err.message);
    });
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad ServicesPage');
  }
  
  goToDetails(servicios: Array<any>){
    this.navCtrl.push(ServicesDetailsPage, {
      listaServicios: servicios
    }); 
  }

  onChange(selectDominio){
    this.select_dominios = selectDominio;
    //console.log(selectDominio);

    this.ajaxServices.getServices(this.select_dominios).subscribe(data => {
      this.servicesMpg = data["MultiProtocolGateway"];
      this.servicesWsg = data["WSGateway"];
      this.servicesXmlf = data["WebAppFW"];
      this.servicesXmlf = data["XMLFirewallService"];
      this.servicesXsl = data["XSLProxyService"];
    //  console.log(this.servicesMpg);
    }, err => {
        console.log(err.message);
    });
  }
}
