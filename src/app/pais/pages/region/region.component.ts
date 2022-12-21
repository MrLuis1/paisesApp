import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {
  hayError: boolean = false;
  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  paises: Country[] = []
  regionActiva: string = '';

  constructor(private paisService: PaisService) { }

  btnBg(region: string):string{
    return (region === this.regionActiva) ? 'btn btn-primary me-2' : 'btn btn-outline-primary me-2';
  }

  activarRegion( region: string ){

    if(region === this.regionActiva) return;

    this.regionActiva = region
    this.paises = [];

    this.paisService.buscarRegion(region)
    .subscribe( paises => this.paises = paises)
  }
}
