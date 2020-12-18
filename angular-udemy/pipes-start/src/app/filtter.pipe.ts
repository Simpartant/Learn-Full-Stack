import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtter',
  pure: false
})
export class FiltterPipe implements PipeTransform {

  transform(value: any, filtterString: string, propName: string): any {
    if (value.length === 0 || filtterString === '') {
      return value
    }
    const resultArray = [];
    for (const item of value) {
        if( item[propName] === filtterString){
          resultArray.push(item);
        }
    }
    return resultArray;
  }

}
