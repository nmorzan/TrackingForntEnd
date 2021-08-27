import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//Componentes
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { CamposComponent } from './campos/campos.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    CamposComponent
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
