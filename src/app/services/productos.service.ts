import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos} from '../interfaces/productos.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando =true;
  producto: Productos[]=[];
  
  constructor(private http:HttpClient) {  
     this.cargueProductos();
  }


  private cargueProductos(){
    this.http.get('https://neodbangular-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp:any)=>
    { 
      
      console.log(resp);
      this.producto=resp;     
    //  this.cargando=false;
      setTimeout(() => {
        this.cargando =false;
      }, 2000);
    });
  }
  
}
