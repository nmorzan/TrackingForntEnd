import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modulos propios
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

//Componentes propios
import { NotFoundPageComponent } from './notFoundPage/not-found-page.component';
import { PagesModuleModule } from './pages/pages-module.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    PagesModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
