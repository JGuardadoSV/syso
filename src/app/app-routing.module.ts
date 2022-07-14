import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrearReporteComponent } from './crear-reporte/crear-reporte.component';
import { LoginComponent } from './login/login.component';
import { MisReportesComponent } from './mis-reportes/mis-reportes.component';
import { ReporteIndividualComponent } from './reporte-individual/reporte-individual.component';

const routes: Routes = [
  { path: 'reportes', component: MisReportesComponent  },
  { path: '', component: LoginComponent  },
  {path:'reporte-individual',component:ReporteIndividualComponent},
  {path:'reportar',component:CrearReporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
