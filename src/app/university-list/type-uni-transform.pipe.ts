import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeUniTransform'
})
export class TypeUniTransformPipe implements PipeTransform {

  transform(value: any): any {
    if (value === 'public') { return 'Công'; }
    return 'Tư';
  }

}
