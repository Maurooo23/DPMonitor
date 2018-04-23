import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  

  constructor(public http: HttpClient) {
    //this.dp.url = "http://192.168.50.48:5556";
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
  // console.log(this.dp.getUrl())
  // console.log(this.dp.getUrl()) //solo lo recibe una vez
    return this.http.get(endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(endpoint, body, reqOpts);
  }
  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(endpoint, body, reqOpts);
  }
  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(endpoint, reqOpts);
  }
  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(endpoint, body, reqOpts);
  }
}
