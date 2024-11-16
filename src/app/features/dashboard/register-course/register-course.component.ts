import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../users/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterCourse } from './models';
import { Course } from '../courses/models/course';
import { selectCoursesOptions, selectIsLoadingRegisterCourse, selectLoadRegisterCourseError, selectRegirterCourses, selectUserOptions } from './store/register-course.selectors';
import { RegisterCourseActions } from './store/register-course.actions';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrl: './register-course.component.scss',
})
export class RegisterCourseComponent implements OnInit {
  registerCourse$: Observable<RegisterCourse[]>;
  userOptions$: Observable<User[]>;
  courses$: Observable<Course[]>;
  loadRegisterCoursesError$: Observable<Error | null>;
  isLoadingRegisterCourses$: Observable<boolean>;

  registerCourseForm: FormGroup;

  constructor(private store: Store, private formBuilder: FormBuilder) {
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
  }

  onSubmit(): void {
    if (this.registerCourseForm.invalid) {
      this.registerCourseForm.markAllAsTouched();
    } else {
      this.store.dispatch(RegisterCourseActions.createRegisterCourse(this.registerCourseForm.value));
      this.registerCourseForm.reset();
    }
  }
}
