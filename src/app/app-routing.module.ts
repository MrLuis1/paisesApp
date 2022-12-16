import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CapitalComponent } from "./pais/pages/capital/capital.component";
import { PaisesComponent } from "./pais/pages/paises/paises.component";
import { RegionComponent } from "./pais/pages/region/region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";

const routes: Routes = [
    {
        path: '',
        component: PaisesComponent,
        pathMatch: 'full',
    },
    {
        path: 'region',
        component: RegionComponent,
    },
    {
        path: 'capital',
        component: CapitalComponent,
    },
    {
        path: 'pais/:nombrePais',
        component: VerPaisComponent,
    },
    {
        path: '**',
        redirectTo: '',
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes ),
    ],
    exports: [
        RouterModule,
    ]
})

export class AppRoutingModule {}