import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortter',
  pure: false
})
export class SortterPipe implements PipeTransform {

  transform(value: any, nameProd: string): any {
    return value.sort((a, b) => {
      if(a[nameProd] > b[nameProd]) {
        return 1;
      } else {
        return -1;
      }
    })
  }
}
