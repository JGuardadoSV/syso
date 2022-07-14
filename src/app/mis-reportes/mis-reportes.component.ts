import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Suceso } from '../interfaces/InterfazSuceso';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-mis-reportes',
  templateUrl: './mis-reportes.component.html',
  styleUrls: ['./mis-reportes.component.css']
})
export class MisReportesComponent implements OnInit {

  sucesos:Suceso[]=[];
  constructor(private router: Router, private servicio:ServicioService) { }

  ngOnInit(): void {
    this.sucesos=this.servicio.obtenerEventos();
  }

  saludo(id:string){
    this.router.navigate(['/reporte-individual/'],{queryParams:{id:id}})
    console.log("Quiere ver el suceso con ID " + id);
  }

}
