import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar( termino:string ) {
    this.termino = termino
    this.hayError = false;

    this.paisService.buscarCapital( termino )
    .subscribe((paises)=>{
      this.paises = paises;
    }, 
    
    (err)=>{
      console.error(err)
      this.hayError = true
      this.paises = []
    })
  }

  sugerencias( termino:string ){
    this.hayError = false;
    this.mostrarSugerencias = true;
    this.paisService.buscarCapital(termino)
    .subscribe(paises => this.paisesSugeridos = paises.slice(0,5),
    (err)=>{
      this.paisesSugeridos = [];
      this.mostrarSugerencias = false;
    })
  }
}
