import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

//Componentes propios
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";


const routes: Routes=[
    { path:'login', component: LoginComponent },
    { path:'registro', component: RegistroComponent},
]



@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
  

export class AuthRoutingModule{}