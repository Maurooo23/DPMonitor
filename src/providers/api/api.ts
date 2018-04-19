import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DpProvider } from '../dp/dp';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  

//url: string;
// url: string = 'http://192.168.50.41:5556';
// url: string = 'http://192.168.50.44:5556';

  constructor(public http: HttpClient, public dp: DpProvider) {
    this.dp.url = "http://192.168.50.41:5556";
    //console.log(this.dp.getUrl())
   // console.log('Hello ApiProvider Provider');
  }


  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    } 
    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }
   // console.log(this.dp.getUrl() + '/' + endpoint, reqOpts)
  // console.log(this.dp.getUrl()) //solo lo recibe una vez
    return this.http.get(this.dp.getUrl() + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.dp.getUrl() + '/' + endpoint, body, reqOpts);
  }
  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.dp.getUrl() + '/' + endpoint, body, reqOpts);
  }
  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.dp.getUrl() + '/' + endpoint, reqOpts);
  }
  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.dp.getUrl() + '/' + endpoint, body, reqOpts);
  }
}
