import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContadoresPage } from './contadores';

@NgModule({
  declarations: [
    ContadoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ContadoresPage),
  ],
})
export class ContadoresPageModule {}
