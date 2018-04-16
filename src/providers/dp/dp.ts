import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DpProvider {

  url: any;

  constructor(public http: HttpClient) {
    console.log('Hello DpProvider Provider');
  }

getUrl(){
  return this.url;
  
}

setUrl(inUrl){
  this.url = inUrl;
}

}
