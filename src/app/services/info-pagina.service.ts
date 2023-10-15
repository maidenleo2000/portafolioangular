import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interface/info-pagina.interface';
import { Equipo } from '../interface/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;

  equipo: any = []

  constructor( private http: HttpClient ) {

    // console.log('Servicio de infoPag listo')

    this.cargarInfo();
    this.cargarEquipo();

  }


  private cargarInfo(){

    //Leer archivo JSON
    this.http.get('assets/data/data-pagina.json').subscribe(
      (resp: infoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      }
    )
   }

   private cargarEquipo(){

    this.http.get('https://angular-html-3cf77-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp) => {
      this.equipo = resp;
      console.log('Desde cargarEquipo Firebase')
      console.log(resp);

    } )
   }


}
