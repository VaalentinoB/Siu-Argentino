import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {
  transform(value: { nombre: string; apellido: string }): string {
    return `${value.nombre} ${value.apellido}`;
  }
}