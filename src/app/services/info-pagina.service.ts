import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  info:InfoPagina = {};
  cargada =false;


  constructor(private http:HttpClient) {

//console.log('Inf pag Servicio listo¡');

//leer el archivo json y tomar sus propiedad, y se necesita el modulo en el appmudule.ts
this.http.get('assets/data/data-pagina.json')
    .subscribe((resp:InfoPagina )=> {

      this.cargada=true;
      this.info=resp;
      console.log(resp);
    });

   }
}
