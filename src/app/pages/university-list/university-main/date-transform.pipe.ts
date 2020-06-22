import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {

  transform(date: any): any {
    const dateType = new Date(date);
    const dateConverted = dateType.toString().split(' ');
    return dateConverted[1].toUpperCase() + ' ' + dateConverted[2] + ' ' + dateConverted[3];
  }

}
