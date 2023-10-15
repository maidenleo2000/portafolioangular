import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) {

    // console.log('Servicio de infoPag listo')

    //Leer archivo JSON

    this.http.get('assets/data/data-pagina.json').subscribe(
      (resp: infoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      }
    )

   }
}
