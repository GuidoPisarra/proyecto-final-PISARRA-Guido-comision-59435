import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../core/models';

@Pipe({
  name: 'userFullName'
})
export class UserFullNamePipe implements PipeTransform {

  transform(value: User, ...args: [string]): string {
    const result = value.firstName + ' ' + value.lastName;
    if (args[0] === 'uppercase') {
      return `${result}`.toUpperCase();
    }
    return result;
  }

}
