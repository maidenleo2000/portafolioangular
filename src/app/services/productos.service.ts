import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = []

  constructor( private http: HttpClient ) {

    this.cargarProductos();
  }


  private cargarProductos(){
    this.http.get<Producto[]>('https://angular-html-3cf77-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp) =>{
      console.log(resp);
      this.productos = resp


      setTimeout(() => {
        this.cargando = false;
      }, 2000);
    })
  }



}
