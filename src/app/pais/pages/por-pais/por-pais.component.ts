import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino:string = '';
  hayError:boolean = false;
  paises:Country[] = [];

  constructor(private PaisService:PaisService){}

  buscar(terminoBusqueda:string){
    this.hayError = false;
    this.termino = terminoBusqueda;
   
    this.PaisService.buscarPais(this.termino)
      .subscribe( paises => {
        console.log(paises);
        this.paises = paises;
      },(err)=>{
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino:string){
    this.hayError = false;
    //TO DO CREAR SUGERENCIAS
  }
}
