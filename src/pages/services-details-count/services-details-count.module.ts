import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicesDetailsCountPage } from './services-details-count';

@NgModule({
  declarations: [
    ServicesDetailsCountPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicesDetailsCountPage),
  ],
})
export class ServicesDetailsCountPageModule {}
