import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto',
  standalone: false
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
