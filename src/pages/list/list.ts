import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AjaxServicesProvider } from '../../providers/ajax-services/ajax-services';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [AjaxServicesProvider]
})
export class ListPage {
  usuarios: any;
  domains: any;
  select_dominios: any;
  objetoUsuarios: any;

  constructor(public navCtrl: NavController, public ajaxServices: AjaxServicesProvider) {

    this.select_dominios = 'default';

    ajaxServices.getUsuarios().subscribe(data => {
      var ordenar = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      var ordenados = {};

      ordenar.forEach(item => {
        if(!ordenados.hasOwnProperty(item.domain)){
          ordenados[item.domain] = [];
        }
        ordenados[item.domain].push(item);
      });

      this.usuarios = ordenados[this.select_dominios];
      this.domains = Object.keys(ordenados);
      this.objetoUsuarios = ordenados;
     for (let index = 0; index < this.usuarios.length; index++) {
            this.usuarios[index].showDetails = false;
            this.usuarios[index].icon = 'ios-arrow-dropdown-circle-outline';
          }
      console.log(this.domains);
      console.log(this.usuarios.length);
    }, err => {
       console.log(err.message);
    });
  }


  onChange(selectDominio){
    this.ajaxServices.getUsuarios().subscribe(data => {
      var ordenar = data["env:Envelope"]["env:Body"]["dp:response"]["dp:status"];
      var ordenados = {};
      
      ordenar.forEach(item => {
        if(!ordenados.hasOwnProperty(item.domain)){
          ordenados[item.domain] = [];
        }
        ordenados[item.domain].push(item);
      });

      this.usuarios = ordenados[this.select_dominios];
      this.domains = Object.keys(ordenados);

      for (let index = 0; index < this.usuarios.length; index++) {
        this.usuarios[index].showDetails = false;
        this.usuarios[index].icon = 'ios-arrow-dropdown-circle-outline';
      }
      console.log(this.domains);
      console.log(this.usuarios);
    }, err => {
       console.log(err.message);
    });
    console.log(selectDominio);
}


      toggleDetails(usuario) {
        if (usuario.showDetails) {
          usuario.showDetails = false;
          usuario.icon = 'ios-arrow-dropdown-circle-outline';
        } else {
          usuario.showDetails = true;
          usuario.icon = 'ios-arrow-dropup-circle-outline';
        }
      }
}
