import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CapitalComponent } from './pages/capital/capital.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RegionComponent } from './pages/region/region.component';



@NgModule({
  declarations: [
    CapitalComponent,
    PaisesComponent,
    VerPaisComponent,
    RegionComponent
  ],
  exports: [
    CapitalComponent,
    PaisesComponent,
    VerPaisComponent,
    RegionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class PaisModule { }
