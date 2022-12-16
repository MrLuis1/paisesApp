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

  constructor(private pais: PaisService) { }

  buscar() {
    this.hayError = false;
    this.pais.buscarPais(this.termino)
    .subscribe((paises)=>{
      this.paises = paises;
      console.log(this.paises)
    }, (err)=>{
      console.log(err)
      this.hayError = true
      this.paises = []
    })
  }
  
}
