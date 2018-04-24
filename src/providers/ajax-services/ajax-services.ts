// Proveedor de información detallada de un Datapower específico

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
    return this.api.get(this.dp.getUrl() + '/info', params);
  }

  uptime(params?: any) {
    return this.api.get(this.dp.getUrl() + '/uptime', params);
  }

  network(params?: any){
    return this.api.get(this.dp.getUrl() + '/network', params);
  } 

  getServices(dominio?: string){
    console.log(this.dp.getUrl())
    return this.api.get(this.dp.getUrl() + '/services?dominio=' + dominio);
  } 
  
  getLog(dominio?: any){
    return this.api.get(this.dp.getUrl() + '/log?dominio='+ dominio);
  }

  getDomains(params?: any){
    return this.api.get(this.dp.getUrl() + '/domains', params);
  } 

  getUsuarios(params?: any){
    console.log(this.dp.getUrl() + '/user')
    return this.api.get(this.dp.getUrl() + '/user', params);
  }

  getMessage(dominio?: any, tipoServicio?: any, nombreServicio?:any){
   // console.log('/message?dominio='+ dominio +'&clase='+ tipoServicio + '&nombre='+ nombreServicio);
    return this.api.get(this.dp.getUrl() + '/message?dominio='+ dominio +'&clase='+ tipoServicio + '&nombre='+ nombreServicio);
  }

}
