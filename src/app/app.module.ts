import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import {
  MqttMessage,
  MqttModule,
  MqttService
} from 'ngx-mqtt';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AdmindpPage } from '../pages/admindp/admindp';
import { NetworkPage } from '../pages/network/network';
import { LogsPage } from '../pages/logs/logs';
import { ServicesPage } from '../pages/services/services';
import { ServicesDetailsPage } from '../pages/services-details/services-details';
import { AddDpPage } from '../pages/add-dp/add-dp';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AjaxServicesProvider } from '../providers/ajax-services/ajax-services';
import { ApiProvider } from '../providers/api/api';
import { DpProvider } from '../providers/dp/dp';
import { MqttProvider } from '../providers/mqtt/mqtt';

export const MQTT_SERVICE_OPTIONS = {
  hostname: '192.168.50.25',
  port: 1883,
  path: '/mon'
};
export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AdmindpPage,
    NetworkPage,
    LogsPage,
    ServicesPage,
    ServicesDetailsPage,
    AddDpPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MqttModule.forRoot({
      provide: MqttService,
      useFactory: mqttServiceFactory
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AdmindpPage,
    NetworkPage,
    LogsPage,
    ServicesPage,
    ServicesDetailsPage,
    AddDpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AjaxServicesProvider,
    ApiProvider,
    DpProvider,
    MqttProvider
  ]
})
export class AppModule {}
