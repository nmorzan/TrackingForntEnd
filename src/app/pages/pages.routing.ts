import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//Componentes
import { AnalisisHviComponent } from "./analisis-hvi/analisis-hvi.component";
import { CamposComponent } from "./campos/campos.component";
import { ConfigsProdComponent } from "./configs-prod/configs-prod.component";
import { ConfigsUserComponent } from "./configs-user/configs-user.component";
import { CosechaComponent } from "./cosecha/cosecha.component";
import { DashboardComponent } from "./dashboard.component";
import { DesmoteComponent } from "./desmote/desmote.component";
import { HomeComponent } from "./home/home.component";
import { ProdAlgComponent } from "./prod-alg/prod-alg.component";
import { TrackingComponent } from "./tracking/tracking.component";
import { VentasComponent } from "./ventas/ventas.component";

//Guardianes
import { AuthGuard } from "../guards/auth.guard";
import { ProductoresComponent } from "./productores/productores.component";

const routes:Routes =[
    { path:'dashboard', component: DashboardComponent,
        canActivate: [AuthGuard],
        children:[
            {path:'', component: HomeComponent},
            {path:'analisisHvi', component: AnalisisHviComponent},
            {path:'campos', component: CamposComponent},
            {path:'configProd', component: ConfigsProdComponent},
            {path:'configUser', component: ConfigsUserComponent},
            {path:'cosecha', component: CosechaComponent},
            {path:'desmote', component: DesmoteComponent},
            {path:'prodAlg', component: ProdAlgComponent},
            {path:'productores', component:ProductoresComponent},
            {path:'tracking', component: TrackingComponent},
            {path:'ventas', component: VentasComponent},
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