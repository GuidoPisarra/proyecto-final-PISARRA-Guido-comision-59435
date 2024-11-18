import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { UsersActions } from './users.actions';
import { UsersService } from '../../../../core/services/users.service';

@Injectable()
export class UsersEffects {


  loadUsers$: Actions<Action<string>>;
  createUsers$: Actions<Action<string>>;
  updateUsers$: Actions<Action<string>>;
  deleteUsers$: Actions<Action<string>>;
  loadUsersCourses$: Actions<Action<string>>;

  constructor(
    private actions$: Actions,
    private _usersService: UsersService,
  ) {

    this.loadUsers$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(UsersActions.loadUsers),
        mergeMap(() =>
          this._usersService.getUsers().pipe(
            map((users) => UsersActions.loadUsersSuccess({ data: users })),
            catchError((error) => of(UsersActions.loadUsersFailure({ error })))
          )
        )
      )
    });

    this.loadUsersCourses$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(UsersActions.loadUserCourses),
        concatMap((action) =>
          this._usersService.getUserCourses(action.userId).pipe(
            map((courses) => UsersActions.loadUserCoursesSuccess({ courses: courses })),
            catchError((error) => of(UsersActions.loadUserCoursesFailure({ error })))
          )
        )
      )
    });

    this.createUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UsersActions.createUsers),
        concatMap((action) =>
          this._usersService.createUser(action.user).pipe(
            map((newUser) => UsersActions.createUsersSuccess({ data: newUser })),
            catchError((error) =>
              of(UsersActions.createUsersFailure({ error }))
            )
          )
        )
      )
    );


    this.deleteUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UsersActions.deleteUsers),
        mergeMap(action =>
          this._usersService.removeUserById(action.userId).pipe(
            map((deleteUser) => UsersActions.deleteUsersSuccess({ user: deleteUser })),
            catchError(error => of(UsersActions.deleteUsersFailure({ error })))
          )
        )
      )
    );

    this.updateUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UsersActions.updateUsers),
        mergeMap((action) =>
          this._usersService.updateUserById(action.user).pipe(
            map((updatedUser) =>
              UsersActions.updateUsersSuccess({ data: updatedUser })
            ),
            catchError((error) =>
              of(UsersActions.updateUsersFailure({ error }))
            )
          )
        )
      )
    );

  }
}

