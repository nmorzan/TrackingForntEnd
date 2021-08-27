import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//routes modules
import { pagesRouting } from "./pages/pages.routing";
import { AuthRoutingModule } from "./auth/auth.routing";

//Componentes propios
import { NotFoundPageComponent } from "./notFoundPage/not-found-page.component";


const routes :Routes=[

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path:'**', component: NotFoundPageComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    pagesRouting
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
