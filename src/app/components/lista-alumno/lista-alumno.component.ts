import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../service/alumno.service';
import { Alumno } from '../../models/alumno/alumno.component';
@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnos = this.alumnoService.getAlumnos();
  }
}
