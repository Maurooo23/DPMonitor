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
      this.domains = data["env:Envelope"]["env:Body"]["amp:GetDomainListResponse"];
     
      console.log(this.domains);
    }, err => {
       console.log(err.message);
    });

   

    ajaxServices.mpg_services(this.select_dominios).subscribe(data => {
      var d = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      if(d === null){
        this.servicesMpg = [];
      } else if(Array.isArray(d)) { // typeof d === 'object'
        this.servicesMpg = d;
      } else {
        this.servicesMpg = [d.ObjectStatus];
      }
      console.log(this.servicesMpg);
    }, err => {
        console.log(err.message);
    });

    ajaxServices.wsg_services(this.select_dominios).subscribe(data => {
      var d = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      if(d === null){
        this.servicesWsg = [];
      } else if(Array.isArray(d)) { // typeof d === 'object'
        this.servicesWsg = d;
      } else {
        this.servicesWsg = [d.ObjectStatus];
      }
      console.log(this.servicesWsg);
    }, err => {
        console.log(err.message);
    });

    ajaxServices.xmlfw_services(this.select_dominios).subscribe(data => {
      var d = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      if(d === null){
        this.servicesXmlf = [];
      } else if(Array.isArray(d)) { // typeof d === 'object'
        this.servicesXmlf = d;
      } else {
        this.servicesXmlf = [d.ObjectStatus];
      }
      console.log(this.servicesXmlf);
    }, err => {
      console.log(err.message);
    });

    ajaxServices.wafw_services(this.select_dominios).subscribe(data => {
      var d = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      if(d === null){
        this.servicesWafw = [];
      } else if(Array.isArray(d)) { // typeof d === 'object'
        this.servicesWafw = d;
      } else {
        this.servicesWafw = [d.ObjectStatus];
      }
      console.log(this.servicesWafw);
    }, err => {
      console.log(err.message);
    });

    ajaxServices.xsl_services(this.select_dominios).subscribe(data => {
      var d = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      if(d === null){
        this.servicesXsl = [];
      } else if(Array.isArray(d)) { // typeof d === 'object'
        this.servicesXsl = d;
      } else {
        this.servicesXsl = [d.ObjectStatus];
      }
      console.log(this.servicesXsl);
    }, err => {
      console.log(err.message);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }
  
  goToDetails(servicios: Array<any>){
    this.navCtrl.push(ServicesDetailsPage, {
      listaServicios: servicios
    }); 
  }

  onChange(selectDominio){
    this.select_dominios = selectDominio;
    console.log(selectDominio);

    this.ajaxServices.mpg_services(this.select_dominios).subscribe(data => {
      var d = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      if(d === null){
        this.servicesMpg = [];
      } else if(Array.isArray(d)) { // typeof d === 'object'
        this.servicesMpg = d;
      } else {
        this.servicesMpg = [d.ObjectStatus];
      }
      console.log(this.servicesMpg);
    }, err => {
        console.log(err.message);
    });

    this.ajaxServices.wsg_services(this.select_dominios).subscribe(data => {
      var d = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      if(d === null){
        this.servicesWsg = [];
      } else if(Array.isArray(d)) { // typeof d === 'object'
        this.servicesWsg = d;
      } else {
        this.servicesWsg = [d.ObjectStatus];
      }
      console.log(this.servicesWsg);
    }, err => {
        console.log(err.message);
    });

    this.ajaxServices.xmlfw_services(this.select_dominios).subscribe(data => {
      var d = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      if(d === null){
        this.servicesXmlf = [];
      } else if(Array.isArray(d)) { // typeof d === 'object'
        this.servicesXmlf = d;
      } else {
        this.servicesXmlf = [d.ObjectStatus];
      }
      console.log(this.servicesXmlf);
    }, err => {
      console.log(err.message);
    });

    this.ajaxServices.wafw_services(this.select_dominios).subscribe(data => {
      var d = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      if(d === null){
        this.servicesWafw = [];
      } else if(Array.isArray(d)) { // typeof d === 'object'
        this.servicesWafw = d;
      } else {
        this.servicesWafw = [d.ObjectStatus];
      }
      console.log(this.servicesWafw);
    }, err => {
      console.log(err.message);
    });

    this.ajaxServices.xsl_services(this.select_dominios).subscribe(data => {
      var d = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      if(d === null){
        this.servicesXsl = [];
      } else if(Array.isArray(d)) { // typeof d === 'object'
        this.servicesXsl = d;
      } else {
        this.servicesXsl = [d.ObjectStatus];
      }
      console.log(this.servicesXsl);
    }, err => {
      console.log(err.message);
    });
  }

}
