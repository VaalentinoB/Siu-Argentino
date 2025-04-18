import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../service/alumno.service';
import { Alumno } from '../model/alumno.model/alumno.model.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumno.html'
})
export class ListaAlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];
  displayedColumns: string[] = ['nombreCompleto', 'aprobado'];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnos = this.alumnoService.getAlumno();
  }
}