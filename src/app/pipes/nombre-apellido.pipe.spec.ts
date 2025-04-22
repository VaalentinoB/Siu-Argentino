import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../model/alumno.model/alumno.model.component';

@Pipe({
  name: 'nombreApellido',
  standalone: false
})
export class NombreApellidoPipe implements PipeTransform {
  transform(alumno: Alumno): string {
    return `${alumno.nombre} ${alumno.apellido}`;
  }
}
