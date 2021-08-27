import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],exports:[    
    LoginComponent,
    RegistroComponent
  ],imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class AuthModule { }
