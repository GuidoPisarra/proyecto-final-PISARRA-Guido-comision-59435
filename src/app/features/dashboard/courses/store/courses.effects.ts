import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { CoursesService } from '../../../../core/services/courses.service';
import { CoursesActions } from './courses.actions';

@Injectable()
export class CoursesEffects {


  loadCourses$: Actions<Action<string>>;
  createCourses$: Actions<Action<string>>;
  createCoursesSuccess$: Actions<Action<string>>;
  deleteCourse$: Actions<Action<string>>;
  updateCourse$: Actions<Action<string>>;
  loadStudentsOfCourses$: Actions<Action<string>>;

  constructor(
    private actions$: Actions,
    private _coursesService: CoursesService,
  ) {

    this.loadCourses$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CoursesActions.loadCourses),
        mergeMap(() =>
          this._coursesService.getCourses().pipe(
            map((courses) => CoursesActions.loadCoursesSuccess({ courses: courses })),
            catchError((error) => of(CoursesActions.loadCoursesFailure({ error })))
          )
        )
      )
    );

    this.createCourses$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CoursesActions.createCourses),
        concatMap((action) =>
          this._coursesService.addCourse(action.course).pipe(
            map((newCourse) => CoursesActions.createCoursesSuccess({ data: newCourse })),
            catchError((error) =>
              of(CoursesActions.createCoursesFailure({ error }))
            )
          )
        )
      )
    );

    this.createCoursesSuccess$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(CoursesActions.createCoursesFailure),
        map(() => CoursesActions.loadCourses())
      );
    });

    this.deleteCourse$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CoursesActions.deleteCourses),
        mergeMap(action =>
          this._coursesService.deleteCourseById(action.courseId).pipe(
            map(courses => CoursesActions.deleteCoursesSuccess({ courses })),
            catchError(error => of(CoursesActions.deleteCoursesFailure({ error })))
          )
        )
      )
    );

    this.updateCourse$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CoursesActions.updateCourses),
        mergeMap((action) =>
          this._coursesService.updateCourseById(action.course.id.toString(), action.course).pipe(
            map((updatedCourse) =>
              CoursesActions.updateCoursesSuccess({ data: action.course })
            ),
            catchError((error) =>
              of(CoursesActions.updateCoursesFailure({ error }))
            )
          )
        )
      )
    );

    this.loadStudentsOfCourses$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CoursesActions.loadStudentsOfCourses),
        mergeMap((action) =>
          this._coursesService.getStudentsOfCourse(action.courseId.toString()).pipe(
            map((students) =>
              CoursesActions.loadStudentsOfCoursesSuccess({ students: students })
            ),
            catchError((error) =>
              of(CoursesActions.loadStudentsOfCoursesFailure({ error }))
            )
          )
        )
      )
    );

  }
}

