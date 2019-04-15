import { IngresoEgreso } from './../models/IngresoEgreso';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingreoEgresoOrden'
})
export class IngreoEgresoOrdenPipe implements PipeTransform {
  transform(items: IngresoEgreso[]): IngresoEgreso[] {
    return items.sort((a: IngresoEgreso, b: IngresoEgreso) => {
      if (a.tipo === 'ingreso') {
        return -1;
      } else {
        return 1;
      }
    });
  }
}
