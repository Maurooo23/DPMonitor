import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';
// import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AdmindpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admindp',
  templateUrl: 'admindp.html',
})
export class AdmindpPage {

  sensor1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private mqttService: MqttService) {
    
   
    
  }

      ionViewDidLoad() {
        console.log('ionViewDidLoad AdmindpPage');
      }
      suscribe(topic: string){
        var response;
        this.mqttService.observe(topic).subscribe((message: MqttMessage) => 
        {
          response = JSON.parse(message.payload.toString());
          console.log(response[0].nombre)
          return response
          
        });
    }

      public unsafePublish(topic: string, message: string ): void 
      {
        this.mqttService.unsafePublish(topic, message, {qos: 0, retain: false});
      }

}
