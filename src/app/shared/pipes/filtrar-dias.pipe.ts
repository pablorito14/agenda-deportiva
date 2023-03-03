import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarDias'
})
export class FiltrarDiasPipe implements PipeTransform {

  transform(data: any[],fecha:string): any[] {
    return data.filter(d => d.fecha == fecha);
  }

}
