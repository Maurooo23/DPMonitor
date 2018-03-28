import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AjaxServicesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AjaxServicesProvider Provider');
  }

  getVersion(){
    this.http.get('http://192.168.50.41:5555/mon/info').subscribe(data => {
      console.log(data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"].FirmwareVersion.Version); 
      return data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"].FirmwareVersion.Version
     
    }, err => {
      console.log(err.message);
    }); 
  }
}
