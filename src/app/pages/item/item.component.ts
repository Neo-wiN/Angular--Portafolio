import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productodescripcion } from 'src/app/interfaces/producto-desc.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto :any;
  idproducto :any;


  constructor(private _serviceroute:ActivatedRoute,
        public _serviceprodu:ProductosService) { }

  ngOnInit() {
    this._serviceroute.params
    .subscribe(parametros =>
      {
        //console.log(parametros['idproducto']);

        this._serviceprodu.getProducto(parametros['idproducto'])
        .subscribe ((producto:any) =>{
            console.log(producto);
            this.idproducto=parametros['idproducto'];
            this.producto=producto;

        })
      });
  }

}
