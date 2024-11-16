import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from './models/course';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CourseDetailsModalComponent } from './course-details-modal/course-details-modal.component';
import { AlertService } from '../../../core/services/alert.service';
import { AuthService } from '../../../core/services/auth.service';
import { selectCoursesOptions, selectIsLoadingCourses } from './store/courses.selector';
import { CoursesActions } from './store/courses.actions';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})

export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['profesor', 'commitee', 'course', 'createdAt', 'startDate', 'endDate', 'actions'];
  dataSource$: Observable<Course[]>;
  isLoading$: Observable<boolean>;
  isAdmin = false;

  constructor(
    private store: Store,
    private matDialog: MatDialog,
    private _alertService: AlertService,
    private _authService: AuthService
  ) {
    this._authService.getUserRole().subscribe((role) => {
      this.isAdmin = role === 'admin';
    });

    this.dataSource$ = this.store.select(selectCoursesOptions);
    this.isLoading$ = this.store.select(selectIsLoadingCourses);
  }

  ngOnInit(): void {
    this.store.dispatch(CoursesActions.loadCourses());
  }

  addCourse(course: Omit<Course, 'id'>): void {
    this.store.dispatch(CoursesActions.createCourses({ course }));
  }

  onDelete(courseId: string): void {
    this._alertService
      .showAlert({
        title: '¡Advertencia!',
        text: '¿Estás seguro de eliminar este curso?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        customClass: {
          confirmButton: 'swal2-confirm-btn',
          cancelButton: 'swal2-cancel-btn',
        },
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.store.dispatch(CoursesActions.deleteCourses({ courseId }));
        }
      });
  }

  openModal(editingCourse?: Course): void {
    this.matDialog
      .open(CourseDialogComponent, { data: { editingCourse } })
      .afterClosed()
      .subscribe((result) => {
        if (!!result) {
          if (editingCourse) {
            this.handleUpdate(editingCourse.id, result);
          } else {
            this.addCourse(result);
          }
        }
      });
  }

  handleUpdate(courseId: number, update: Course): void {
    this.store.dispatch(CoursesActions.updateCourses({ course: { ...update, id: courseId } }));
  }

  viewDetails(course: Course): void {
    this.matDialog.open(CourseDetailsModalComponent, {
      width: '500px',
      data: course,
    });
  }
}
