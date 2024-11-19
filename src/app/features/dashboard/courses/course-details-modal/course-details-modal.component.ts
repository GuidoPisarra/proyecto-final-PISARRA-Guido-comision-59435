import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, Subscription } from 'rxjs';
import { Student } from '../../students/models';
import { Store } from '@ngrx/store';
import { CoursesActions } from '../store/courses.actions';
import { selectLoadStudentsOfCourses } from '../store/courses.selector';
import { map } from 'rxjs/operators';
import { StudentsActions } from '../../students/store/students.actions';

@Component({
  selector: 'app-course-details-modal',
  templateUrl: './course-details-modal.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailsModalComponent implements OnInit, OnDestroy {
  students$: Observable<Student[]> = of([]);
  studentCount$: Observable<number> | undefined;
  displayedColumns: string[] = ['firstName', 'lastName', 'actions'];
  private subscriptions: Subscription = new Subscription();

  constructor(
    public dialogRef: MatDialogRef<CourseDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store
  ) {
    this.store.dispatch(CoursesActions.loadStudentsOfCourses({ courseId: this.data.id }));
  }

  ngOnInit(): void {
    this.students$ = this.store.select(selectLoadStudentsOfCourses);
    this.studentCount$ = this.students$.pipe(map((students) => students.length));
  }

  removeStudent(student: Student): void {
    this.store.dispatch(
      StudentsActions.removeStudentFromCourse({
        courseId: this.data.id,
        studentId: student.id.toString(),
      })
    );
  }
  onClose(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
