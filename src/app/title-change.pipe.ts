import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleChange'
})
export class TitleChangePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
