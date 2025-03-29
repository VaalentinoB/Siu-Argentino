import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'] 
})
export class AlumnoComponent { 

}


export interface Alumno {
  id: number;
  nombre: string;
  edad: number;
  aprobado: boolean;
}
