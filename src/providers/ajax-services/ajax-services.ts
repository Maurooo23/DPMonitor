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
    return this.api.get('/mon/info', params);
  }

  uptime(params?: any) {
    return this.api.get('/mon/datetime?domain=default', params);
  }

/*  network(params?: any){
    return this.api.get('/mon/network', params);
  }*/



}
