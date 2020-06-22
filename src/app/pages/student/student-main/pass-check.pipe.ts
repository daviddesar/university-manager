import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passCheck'
})
export class PassCheckPipe implements PipeTransform {

  transform(uniScore: any, studentScore: any): any {
    if (studentScore >= uniScore) {
      return 'Đậu';
    }
    return 'Rớt';
  }

}
