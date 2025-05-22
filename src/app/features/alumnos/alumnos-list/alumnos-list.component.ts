import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/core/models/alumno.model';
import { AlumnosService } from 'src/app/core/services/alumno.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnos = this.alumnosService.obtenerAlumnos();
  }

  eliminar(id: number): void {
    this.alumnosService.eliminarAlumno(id);
    this.alumnos = this.alumnosService.obtenerAlumnos();
  }
}
