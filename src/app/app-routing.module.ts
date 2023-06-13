import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorMonedaComponent } from './pais/pages/por-moneda/por-moneda.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { AboutComponent } from './shared/pages/about/about.component';

const routes: Routes =[
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'pais',
        component: PorPaisComponent,
        pathMatch:'full'
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'capital',
        component:PorCapitalComponent
    },
    {
        path:'region',
        component:PorRegionComponent
    },
    {
        path:'capital',
        component:PorCapitalComponent
    },
    {
        path:'moneda',
        component:PorMonedaComponent
    },
    {
        path:'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        component:HomeComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],
})
export class AppRoutingModule {}