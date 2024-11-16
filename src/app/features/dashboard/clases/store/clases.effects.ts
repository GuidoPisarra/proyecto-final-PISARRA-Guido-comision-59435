import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { ClasesService } from '../../../../core/services/clases.service';
import { ClasesActions } from './clases.actions';
import { Clase } from '../models/clase';

@Injectable()
export class ClasesEffects {


  loadClases$: Actions<Action<string>>;
  createClases$: Actions<Action<string>>;
  createClasesSuccess$: Actions<Action<string>>;
  deleteClase$: Actions<Action<string>>;

  constructor(
    private actions$: Actions,
    private _clasesService: ClasesService,
  ) {

    this.loadClases$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ClasesActions.loadClases),
        concatMap(() =>
          this._clasesService.getClases('1').pipe(
            map((response) => ClasesActions.loadClasesSuccess({ data: response })),
            catchError((error) => of(ClasesActions.loadClasesFailure({ error })))
          )
        )
      );
    });

    this.createClases$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ClasesActions.createClases),
        concatMap((action) =>
          this._clasesService
            .addClass({
              courseId: action.courseId
            })
            .pipe(
              map((data) => ClasesActions.createClasesSuccess({ data })),
              catchError((error) =>
                of(ClasesActions.createClasesFailure({ error }))
              )
            )
        )
      );
    });

    this.createClasesSuccess$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ClasesActions.createClasesFailure),
        map(() => ClasesActions.loadClases({ courseId: '1' }))
      );
    });

    this.deleteClase$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ClasesActions.deleteClases),
        mergeMap(({ courseId, clase }) =>
          this._clasesService.deleteClassById(courseId, clase.id).pipe(
            map((clases: Clase[]) => ClasesActions.deleteClasesSuccess({ clase })),
            catchError((error) =>
              of(ClasesActions.deleteClasesFailure({ error }))
            )
          )
        )
      )
    );





  }
}

