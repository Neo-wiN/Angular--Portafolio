import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos} from '../interfaces/productos.interface';
import { resolve } from '../../../node_modules/@types/q';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando =true;
  producto: Productos[]=[];
  productoFiltrado:Productos[]=[];
  
  constructor(private http:HttpClient) {  
     this.cargueProductos();
  }


  private cargueProductos(){
    
    return new Promise( (resolve, reject)=>{
      
    

    this.http.get('https://neodbangular-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp:any)=>{ 
      //console.log(resp);
      this.producto=resp;     
     this.cargando=false;
    
    /*  setTimeout(() => {
        this.cargando =false;
      }, 100);*/
      });
  });
  }  

      getProducto(idproducto:string){
       return  this.http.get(`https://neodbangular-default-rtdb.firebaseio.com/productos/${idproducto}.json`);
      }

      buscarProducto(termino:string){

        if (this.producto.length===0){//Cargar Productos
        this.cargueProductos().then(()=>{
          //Ejecutar despues de tener los productos
          //Aplicar filtro
          this.filtrarProductos(termino);
        });

        }else{
                    //Aplicar Filtro
                    this.filtrarProductos(termino);
        }
        

      }
        

      private filtrarProductos(termino:any){
        console.log(this.producto);
        this.productoFiltrado=[];

        termino=termino.toLocaleLowerCase();
        this.producto.forEach(prod=>{
          const tituloLower= prod.titulo.toLocaleLowerCase();
        if(prod.categoria.indexOf(termino)>=0 ||  tituloLower.indexOf(termino)>=0 ){
          this.productoFiltrado.push(prod);
        }
      });
      }
}