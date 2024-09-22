import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpresasComponent,
    ArticulosComponent,
    ColaboradoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
