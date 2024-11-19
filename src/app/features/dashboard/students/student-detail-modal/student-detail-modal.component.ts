import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Course } from '../../courses/models/course';
import { Store } from '@ngrx/store';
import { StudentsActions } from '../store/students.actions';
import { selectStudentCourses } from '../store/students.selector';

@Component({
  selector: 'app-student-detail-modal',
  templateUrl: './student-detail-modal.component.html',
  styleUrl: './student-detail-modal.component.scss'
})
export class StudentDetailModalComponent implements OnInit {
  courses$: Observable<Course[]> | null = null;
  studentID: string = '';
  constructor(
    public dialogRef: MatDialogRef<StudentDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store
  ) {
    this.store.dispatch(StudentsActions.loadStudentCourses({ studentId: data.id }));
    this.studentID = data.id;
  }

  ngOnInit() {
    this.courses$ = this.store.select(selectStudentCourses);
  }

  onClose(): void {
    this.store.dispatch(StudentsActions.clearStudentCourses());
    this.dialogRef.close();
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = '../../../../../assets/avatars/noImage.jpg';
  }

  remove(courseId: string): void {
    this.store.dispatch(StudentsActions.removeCourse({ studentId: this.studentID, courseId: courseId }))
  }
}
