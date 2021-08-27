import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//Componentes
import { DashboardComponent } from "./dashboard.component";
import { HomeComponent } from "./home/home.component";
import { CamposComponent } from "./campos/campos.component";

const routes:Routes =[
    { path:'dashboard', component: DashboardComponent,
        children:[
            {path:'', component: HomeComponent},
            {path:'campos', component: CamposComponent}
    ]},
]

@NgModule({
    declarations:[],
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})

export class pagesRouting {}