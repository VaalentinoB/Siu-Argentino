import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlumnoApiService } from '../../service/alumno-api.service';
import { Alumno } from '../../model/alumno.model/alumno.model.component';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-alumno-api',
  templateUrl: './alumno-api.component.html',
  styleUrls: ['./alumno-api.component.css'],
  standalone: false
})
export class AlumnoApiComponent implements OnInit, OnDestroy {

  alumnosFiltrados$!: Observable<Alumno[]>;
  private destroy$ = new Subject<void>();

  constructor(private alumnoApi: AlumnoApiService) {}

  ngOnInit(): void {
    this.alumnosFiltrados$ = this.alumnoApi.getAlumnos$().pipe(
      takeUntil(this.destroy$),
      map(alumnos => alumnos.filter(alumno => alumno.aprobado))
    );

    
    this.alumnoApi.getAlumnosPromise().then(data => {
      console.log('Promesa cumplida con alumnos:', data);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}