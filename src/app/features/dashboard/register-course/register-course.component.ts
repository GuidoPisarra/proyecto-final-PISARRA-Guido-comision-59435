import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../users/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterCourse } from './models';
import { Course } from '../courses/models/course';
import { selectCoursesOptions, selectIsLoadingRegisterCourse, selectLoadRegisterCourseError, selectRegirterCourses, selectUserOptions } from './store/register-course.selectors';
import { RegisterCourseActions } from './store/register-course.actions';
import { Sort } from '@angular/material/sort';
import { AlertService } from '../../../core/services/alert.service';
import { StudentsActions } from '../students/store/students.actions';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrl: './register-course.component.scss',
})
export class RegisterCourseComponent implements OnInit {
  displayedColumns: string[] = ['course', 'profesor', 'user', 'acciones'];
  isAdmin = true;

  registerCourse$: Observable<RegisterCourse[]>;
  userOptions$: Observable<User[]>;
  courses$: Observable<Course[]>;
  loadRegisterCoursesError$: Observable<Error | null>;
  isLoadingRegisterCourses$: Observable<boolean>;

  registerCourseForm: FormGroup;
  sortedData: RegisterCourse[] = [];

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private _alertService: AlertService
  ) {
    this.registerCourseForm = this.formBuilder.group({
      userId: [null, [Validators.required]],
      courseId: [null, [Validators.required]],
    });

    this.registerCourse$ = this.store.select(selectRegirterCourses);
    this.courses$ = this.store.select(selectCoursesOptions);
    this.userOptions$ = this.store.select(selectUserOptions);
    this.loadRegisterCoursesError$ = this.store.select(selectLoadRegisterCourseError);
    this.isLoadingRegisterCourses$ = this.store.select(selectIsLoadingRegisterCourse);
  }

  ngOnInit(): void {
    this.store.dispatch(RegisterCourseActions.loadRegisterCourses());
    this.store.dispatch(RegisterCourseActions.loadCoursesAndUserOptions());
    this.registerCourse$.subscribe((courses) => {
      this.sortedData = [...courses];
    });
  }



  onSubmit(): void {
    if (this.registerCourseForm.invalid) {
      this.registerCourseForm.markAllAsTouched();
    } else {
      this.store.dispatch(RegisterCourseActions.createRegisterCourse(this.registerCourseForm.value));
      this.registerCourseForm.reset();
    }
  }

  sortData(sort: Sort) {
    const data = [...this.sortedData];
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'curso':
          return this.compare(a.courseId, b.courseId, isAsc);
        case 'profesor':
          return this.compare(a.course?.profesor || '', b.course?.profesor || '', isAsc);
        case 'usuario':
          return this.compare(a.user?.firstName || '', b.user?.firstName || '', isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: string | number, b: string | number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  onDelete(studentId: string, courseId: string) {
    this._alertService
      .showAlert({
        title: '¡Advertencia!',
        text: '¿Estás seguro de eliminar al alumno del curso?',
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
          this.store.dispatch(StudentsActions.removeCourse({ studentId: studentId, courseId: courseId }));
          this.registerCourse$.subscribe((courses) => {
            this.sortedData = [...courses];
          });
        }
      });
  }
}
