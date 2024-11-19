import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { StudentsService } from '../../../../core/services/students.service';
import { StudentsActions } from './students.actions';

@Injectable()
export class StudentsEffects {


  loadStudents$: Actions<Action<string>>;
  createStudents$: Actions<Action<string>>;
  updateStudents$: Actions<Action<string>>;
  deleteStudents$: Actions<Action<string>>;
  loadStudentCourses$: Actions<Action<string>>;
  removeCourseStudent$: Actions<Action<string>>;
  removeStudentFromCourse$: Actions<Action<string>>;

  constructor(
    private actions$: Actions,
    private _studentsService: StudentsService,
  ) {

    this.loadStudents$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(StudentsActions.loadStudents),
        mergeMap(() =>
          this._studentsService.getStudents().pipe(
            map((students) => StudentsActions.loadStudentsSuccess({ data: students })),
            catchError((error) => of(StudentsActions.loadStudentsFailure({ error })))
          )
        )
      )
    });

    this.createStudents$ = createEffect(() =>
      this.actions$.pipe(
        ofType(StudentsActions.createStudents),
        concatMap((action) =>
          this._studentsService.addStudent(action.student).pipe(
            map((newStudent) => StudentsActions.createStudentsSuccess({ data: newStudent })),
            catchError((error) =>
              of(StudentsActions.createStudentsFailure({ error }))
            )
          )
        )
      )
    );


    this.deleteStudents$ = createEffect(() =>
      this.actions$.pipe(
        ofType(StudentsActions.deleteStudents),
        mergeMap(action =>
          this._studentsService.deleteStudentById(action.studentId).pipe(
            map((deleteStudent) => StudentsActions.deleteStudentsSuccess({ student: deleteStudent })),
            catchError(error => of(StudentsActions.deleteStudentsFailure({ error })))
          )
        )
      )
    );

    this.updateStudents$ = createEffect(() =>
      this.actions$.pipe(
        ofType(StudentsActions.updateStudents),
        mergeMap((action) =>
          this._studentsService.updateStudentById(action.student.id.toString(), action.student).pipe(
            map((updatedStudent) =>
              StudentsActions.updateStudentsSuccess({ data: updatedStudent })
            ),
            catchError((error) =>
              of(StudentsActions.updateStudentsFailure({ error }))
            )
          )
        )
      )
    );

    this.loadStudentCourses$ = createEffect(() =>
      this.actions$.pipe(
        ofType(StudentsActions.loadStudentCourses),
        switchMap(({ studentId }) =>
          this._studentsService.getStudentCourses(studentId).pipe(
            map((courses) => StudentsActions.loadStudentCoursesSuccess({ courses })),
            catchError((error) => of(StudentsActions.loadStudentCoursesFailure({ error })))
          )
        )
      )
    );

    this.removeCourseStudent$ = createEffect(() =>
      this.actions$.pipe(
        ofType(StudentsActions.removeCourse),
        switchMap((action) =>
          this._studentsService.removeCourse(action.studentId, action.courseId).pipe(
            map((course) => StudentsActions.removeCourseSuccess({ course })),
            catchError((error) => of(StudentsActions.removeCourseFailure({ error })))
          )
        )
      )
    );

    this.removeStudentFromCourse$ = createEffect(() =>
      this.actions$.pipe(
        ofType(StudentsActions.removeStudentFromCourse),
        mergeMap((action) =>
          this._studentsService.removeStudentFromCourse(action.studentId, action.courseId).pipe(
            map((students) => {
              return StudentsActions.removeStudentFromCourseSuccess({ students });
            }),
            catchError((error) => {
              return of(StudentsActions.removeStudentFromCourseFailure({ error }));
            })
          )
        )
      )
    );



  }
}

