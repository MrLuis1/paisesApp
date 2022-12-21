import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false

  constructor(private paisService: PaisService) { }

  buscar( termino:string ) {
    this.termino = termino
    this.hayError = false;
    this.paisService.buscarPais(termino)
    .subscribe((paises)=>{
      this.paises = paises;
      console.log(this.paises)
    }, (err)=>{
      console.error(err)
      this.hayError = true
      this.paises = []
    })
  }

  sugerencias(termino:string){
    this.hayError = false
    this.mostrarSugerencias = true;
    console.log(termino)
    this.paisService.buscarPais( termino )
    .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
    (err)=>{
      this.paisesSugeridos = [];
      this.mostrarSugerencias = false;
    })
  }
  
}
