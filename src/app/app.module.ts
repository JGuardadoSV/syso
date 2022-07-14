import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MisReportesComponent } from './mis-reportes/mis-reportes.component';
import { ReporteIndividualComponent } from './reporte-individual/reporte-individual.component';
import { CrearReporteComponent } from './crear-reporte/crear-reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MisReportesComponent,
    ReporteIndividualComponent,
    CrearReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
