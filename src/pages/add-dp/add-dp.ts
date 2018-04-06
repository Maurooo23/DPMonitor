import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddDpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-dp',
  templateUrl: 'add-dp.html',
})
export class AddDpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  logForm() {
    console.log()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDpPage');
  }

}
