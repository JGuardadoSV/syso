import { Injectable } from '@angular/core';
import { Suceso } from '../interfaces/InterfazSuceso';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  sucesos:Suceso[]=[
    {id:"1",descripcion:"Un accidente",fecha:"02/07/2022",foto:"foto",tipo:['Incidente','Accidente']},
    {id:"2",descripcion:"Otro accidente",fecha:"02/07/2022",foto:"foto",tipo:['Acción insegura']}
  ];


  constructor() { }


  obtenerEventos():Suceso[]{
  return this.sucesos;
  }
}
