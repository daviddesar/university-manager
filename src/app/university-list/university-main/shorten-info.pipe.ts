import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenInfo'
})
export class ShortenInfoPipe implements PipeTransform {

  transform(value: string): any {
    if (value.length >= 40) {
      return value.slice(0, 40) + '...';
    }
    return null;
  }

}
