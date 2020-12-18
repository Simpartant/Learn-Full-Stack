import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reserve'
})
export class ReservePipe implements PipeTransform {

  transform(value: any): any {
    return value.split('').reverse().join('');
  }

}
