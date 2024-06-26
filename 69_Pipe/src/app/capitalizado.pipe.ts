import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
  standalone: true
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string): string {
    value = value.toLowerCase();
    let nombres = value.split(' ');
    nombres = nombres.map(nombre => {
      return nombre[0].toUpperCase() + nombre.substr(1);
    });
    return nombres.join(' ');
  }

}
