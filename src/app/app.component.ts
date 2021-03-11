  import { Component } from '@angular/core';
  import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    constructor(public infoPaginaService:InfoPaginaService,//inyecta o trae el servicio nombrado en info-pagina.service.ts
      public productosSercives:ProductosService){} 
  }
