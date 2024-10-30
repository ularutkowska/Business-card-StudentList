import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'student',
  standalone: true
})
export class StudentPipe implements PipeTransform {

  transform(count: number): string {
    if (count === 0) {
      return "Brak studentów na liście";
    } else if (count === 1) {
      return "Na liście jest 1 student.";
    } else {
      return `Na liście jest ${count} studentów.`;
    }
  }
}
