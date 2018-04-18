import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { ApiProvider } from '../api/api';
import { DpProvider } from '../dp/dp';
@Injectable()
export class AjaxServicesProvider {

  constructor(public http: HttpClient, public api: ApiProvider,public dp: DpProvider) {
   // console.log('Hello AjaxServicesProvider Provider');
  }

  firmware(params?: any) {
    return this.api.get('/info', params);
  }

  uptime(params?: any) {
    return this.api.get('/uptime', params);
  }

  network(params?: any){
    return this.api.get('/network', params);
  } 

  getServices(dominio?: string){
    console.log(this.dp.getUrl())
    return this.api.get('/services?dominio=' + dominio);
  } 
  
  getLog(dominio?: any){
    return this.api.get('/log?dominio='+ dominio);
  }

  getDomains(params?: any){
    return this.api.get('/domains', params);
  } 

  getUsuarios(params?: any){
    return this.api.get('/user', params);
  }

}
