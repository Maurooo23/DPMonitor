import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { ApiProvider } from '../api/api';

@Injectable()
export class AjaxServicesProvider {

  constructor(public http: HttpClient, public api: ApiProvider) {
    console.log('Hello AjaxServicesProvider Provider');
  }

  firmware(params?: any) {
    return this.api.get('/info', params);
  }

  uptime(params?: any) {
    return this.api.get('/uptime', params);
  }

  network(params?: any){
    return this.api.get('/mon/network', params);
  } 

  mpg_services(dominio?: string){
    return this.api.get('/mon/services?domain=' + dominio + '&class=MultiProtocolGateway');
  } 
  wsg_services(dominio?: string){
    return this.api.get('/mon/services?domain=' + dominio + '&class=WSGateway')
  }
  xmlfw_services(dominio?: string){
    return this.api.get('/mon/services?domain=' + dominio + '&class=XMLFirewallService')
  }
  wafw_services(dominio?: string){
    return this.api.get('/mon/services?domain=' + dominio + '&class=WebAppFW')
  }
  xsl_services(dominio?: string){
    return this.api.get('/mon/services?domain=' + dominio + '&class=XSLProxyService')
  }
  
  getLog(dominio?: any){
    return this.api.get('/mon/log?domain='+ dominio + '');
  }

  getDomains(params?: any){
    return this.api.get('/mon/domain', params);
  } 

  getUsuarios(params?: any){
    return this.api.get('/mon/user', params);
  }

}
