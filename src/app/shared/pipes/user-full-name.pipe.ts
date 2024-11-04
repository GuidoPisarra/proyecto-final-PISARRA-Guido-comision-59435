import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../features/dashboard/students/models';

@Pipe({
  name: 'userFullName'
})
export class StudentFullNamePipe implements PipeTransform {

  transform(value: Student, ...args: [string]): string {
    const result = value.firstName + ' ' + value.lastName;
    if (args[0] === 'uppercase') {
      return `${result}`.toUpperCase();
    }
    return result;
  }

}
