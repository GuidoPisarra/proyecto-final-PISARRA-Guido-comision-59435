import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { CoursesService } from '../../../../core/services/courses.service';
import { UsersService } from '../../../../core/services/users.service';
import { RegisterCourseService } from '../../../../core/services/register-course.service';
import { RegisterCourseActions } from './register-course.actions';
import { forkJoin, of } from 'rxjs';

@Injectable()
export class RegisterCourseEffects {


  loadRegisterCourse$: Actions<Action<string>>;
  createRegisterCourse$: Actions<Action<string>>;
  createRegisterCourseSuccess$: Actions<Action<string>>;

  loadCoursesAndUserOptions$: Actions<Action<string>>;

  constructor(
    private actions$: Actions,
    private _coursesStervice: CoursesService,
    private _userService: UsersService,
    private _registerCourse: RegisterCourseService
  ) {
    this.loadRegisterCourse$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(RegisterCourseActions.loadRegisterCourses),
        concatMap(() =>
          this._registerCourse.getRegisteredCourses().pipe(
            map((response) => RegisterCourseActions.loadRegisterCoursesSuccess({ data: response })),
            catchError((error) => of(RegisterCourseActions.loadRegisterCoursesFailure({ error })))
          )
        )
      );
    });

    this.createRegisterCourse$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(RegisterCourseActions.createRegisterCourse),
        concatMap((action) =>
          this._registerCourse
            .createRegisterCourse({
              courseId: action.courseId,
              userId: action.userId,
            })
            .pipe(
              map((data) => RegisterCourseActions.createRegisterCourseSuccess({ data })),
              catchError((error) =>
                of(RegisterCourseActions.createRegisterCourseFailure({ error }))
              )
            )
        )
      );
    });

    this.createRegisterCourseSuccess$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(RegisterCourseActions.createRegisterCourseSuccess),
        map(() => RegisterCourseActions.loadRegisterCourses())
      );
    });

    this.loadCoursesAndUserOptions$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(RegisterCourseActions.loadCoursesAndUserOptions),
        concatMap(() =>
          forkJoin([
            this._coursesStervice.getCourses(),
            this._userService.getUsers(),
          ]).pipe(
            map((res) =>
              RegisterCourseActions.loadCoursesAndUserOptionsSuccess({
                courses: res[0],
                users: res[1],
              })
            ),
            catchError((error) =>
              of(RegisterCourseActions.loadCoursesAndUserOptionsFailure({ error }))
            )
          )
        )
      );
    });
  }
}
