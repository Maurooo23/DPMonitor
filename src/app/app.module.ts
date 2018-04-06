import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

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
    ApiProvider
  ]
})
export class AppModule {}
