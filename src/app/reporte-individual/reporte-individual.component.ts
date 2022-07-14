import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reporte-individual',
  templateUrl: './reporte-individual.component.html',
  styleUrls: ['./reporte-individual.component.css']
})
export class ReporteIndividualComponent implements OnInit {
  idSuceso:string='';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idSuceso = params['id'];
    });
    console.log("Este parametro vino por la url =" + this.idSuceso);
    
  }

}
