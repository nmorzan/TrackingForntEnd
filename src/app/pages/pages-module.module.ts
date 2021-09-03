import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//Componentes
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { CamposComponent } from './campos/campos.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ConfigsUserComponent } from './configs-user/configs-user.component';
import { ConfigsProdComponent } from './configs-prod/configs-prod.component';

import { AnalisisHviComponent } from './analisis-hvi/analisis-hvi.component';
import { VentasComponent } from './ventas/ventas.component';
import { DesmoteComponent } from './desmote/desmote.component';
import { CosechaComponent } from './cosecha/cosecha.component';
import { ProdAlgComponent } from './prod-alg/prod-alg.component';
import { ProductoresComponent } from './productores/productores.component';




@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    CamposComponent,
    TrackingComponent,
    ConfigsUserComponent,
    ConfigsProdComponent,
    ProdAlgComponent,
    CosechaComponent,
    DesmoteComponent,
    AnalisisHviComponent,
    VentasComponent,
    ProductoresComponent
  ],
  exports:[    
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModuleModule { }
