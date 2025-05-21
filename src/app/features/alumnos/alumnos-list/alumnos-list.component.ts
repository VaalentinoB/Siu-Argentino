import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../core/models/alumno.model';
import { AlumnoService } from '../../../core/services/alumno.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];
  alumnoEditando: Alumno | null = null;

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnoService.alumnos$.subscribe(data => {
      this.alumnos = data;
    });
  }

  onEdit(alumno: Alumno): void {
    this.alumnoEditando = { ...alumno };
  }

  onDelete(id: number): void {
    this.alumnoService.eliminarAlumno(id);
  }

  onGuardar(alumno: Alumno): void {
    if (this.alumnoEditando) {
      this.alumnoService.editarAlumno(alumno);
    } else {
      this.alumnoService.agregarAlumno(alumno);
    }
    this.alumnoEditando = null;
  }

  onCancelar(): void {
    this.alumnoEditando = null;
  }
}