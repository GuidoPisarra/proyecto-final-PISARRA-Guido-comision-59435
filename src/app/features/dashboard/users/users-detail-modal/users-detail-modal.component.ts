import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Course } from '../../courses/models/course';
import { Store } from '@ngrx/store';
import { UsersActions } from '../store/users.actions';
import { selectUserCourses } from '../store/users.selector';
import { User } from '../models';

@Component({
  selector: 'app-users-detail-modal',
  templateUrl: './users-detail-modal.component.html',
  styleUrls: ['./users-detail-modal.component.scss']
})
export class UsersDetailModalComponent {
  courses$: Observable<Course[]>;
  userID: string = '';
  constructor(
    public dialogRef: MatDialogRef<UsersDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef,
    private store: Store
  ) {
    console.log(data);
    this.store.dispatch(UsersActions.loadUserCourses({ userId: data.id }));
    this.userID = data.id;
    this.courses$ = this.store.select(selectUserCourses);
  }

  ngOnInit() {

  }

  onClose(): void {
    this.dialogRef.close();
    this.store.dispatch(UsersActions.clearUserCourses());
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = '../../../../../assets/avatars/noImage.jpg';
  }

  remove(courseId: string): void {
    /* this.store.dispatch(UsersActions.removeUserCourse({ userId: this.userID, courseId: courseId }))
    this.courses$?.subscribe(courses => {
      this.cdr.detectChanges();
    }); */
  }
}
