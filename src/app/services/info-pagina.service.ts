import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  info:InfoPagina = {};
  cargada =false;

  equipo: any[]=[];

  constructor(private http:HttpClient) {

//console.log('Inf pag Servicio listo¡');
      this.cargarInf();
      this.cargarEquipo();

   }
   private cargarInf() {
     //leer el archivo json y tomar sus propiedad, y se necesita el modulo en el appmudule.ts
      this.http.get('assets/data/data-pagina.json')
      .subscribe((resp:InfoPagina )=> {
        this.cargada=true;
        this.info=resp;
       // console.log(resp);
      });  
    }
    private cargarEquipo() {
   //leer el archivo json y tomar sus propiedad, y se necesita el modulo en el appmudule.ts
   this.http.get('https://neodbangular-default-rtdb.firebaseio.com/equipo/.json')
   .subscribe((resp:any)=> {
     this.equipo=resp ;
   // console.log(resp);
   });  
 }
   

}
