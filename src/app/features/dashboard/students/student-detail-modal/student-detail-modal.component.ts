import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Course } from '../../courses/models/course';
import { Store } from '@ngrx/store';
import { StudentsActions } from '../store/students.actions';
import { selectStudentCourses } from '../store/students.selector';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-student-detail-modal',
  templateUrl: './student-detail-modal.component.html',
  styleUrl: './student-detail-modal.component.scss'
})
export class StudentDetailModalComponent {
  courses$: Observable<Course[]>;
  studentID: string;
  constructor(
    public dialogRef: MatDialogRef<StudentDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store
  ) {
    this.store.dispatch(StudentsActions.loadStudentCourses({ studentId: data.id }));
    this.courses$ = this.store.select(selectStudentCourses);
    this.studentID = data.id;
  }



  onClose(): void {
    this.dialogRef.close();
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = '../../../../../assets/avatars/noImage.jpg';
  }

  remove(course: Course): void {
    const data = { studentId: this.studentID, courseId: course.id.toString() }
    this.store.dispatch(StudentsActions.removeCourse({ data }));
  }
}
