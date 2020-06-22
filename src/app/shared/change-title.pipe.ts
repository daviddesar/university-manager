import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeTitle'
})
export class ChangeTitlePipe implements PipeTransform {

  transform(type: string, element: any): string {
    switch (type) {
      case 'add': {
        return element === 'title' ? 'Nhập thông tin trường' : 'Thêm trường';
      }
      case 'edit': {
        return element === 'title' ? 'Thay đổi thông tin trường' : 'Thay đổi';
      }
      default: return null;
    }
  }

}
