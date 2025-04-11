import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../service/alumno.service';
import { Alumno } from '../model/alumno.model/alumno.model.component';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.html',
  styleUrls: ['./lista-alumno.css'],
  standalone: false
})
export class ListaAlumnosComponent implements OnInit {  

  alumnos: Alumno[] = []; 

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnos = this.alumnoService.getAlumnos();
  }
}

