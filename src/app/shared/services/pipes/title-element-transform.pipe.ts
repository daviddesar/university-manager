import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleElementTransform'
})
export class TitleElementTransformPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
