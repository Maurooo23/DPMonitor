import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the DpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DpProvider {

  dps = [
    {
      name: 'DP1',
      url: "http://192.168.50.41:5556"
    },
    {
      name: 'DP2',
      url: "http://192.168.50.48:5556"
    },
    {
      name: 'DP3',
      url: "http://192.168.50.49:5556"
    }
  ];

  url: string;

  constructor(public http: HttpClient) {
   // console.log('Hello DpProvider Provider');
   this.setUrl(this.dps[0].url)
  }
 
  getUrl(){
   // console.log('get: ' + this.url)
    return this.url;
  }

  setUrl(inUrl){
    this.url = inUrl;
   // console.log('set: ' + this.url)
  }
}
