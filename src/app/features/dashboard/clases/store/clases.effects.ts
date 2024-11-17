import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, switchMap } from 'rxjs/operators';
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
  updateClases$: Actions<Action<string>>;
  deleteClase$: Actions<Action<string>>;

  constructor(
    private actions$: Actions,
    private _clasesService: ClasesService,
  ) {

    this.loadClases$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ClasesActions.loadClases),
        switchMap(({ courseId }) => {
          return this._clasesService.getClases(courseId).pipe(
            map((clases) =>
              ClasesActions.loadClasesSuccess({ data: clases })
            ),
            catchError((error) => of(ClasesActions.loadClasesFailure({ error })))
          );
        })
      );
    });

    this.createClases$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ClasesActions.createClases),
        concatMap((action) =>
          this._clasesService
            .addClass({
              ...action.clase,
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
        ofType(ClasesActions.createClasesSuccess),
        map(({ data }) => ClasesActions.loadClases({ courseId: data.courseId }))
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

    this.updateClases$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ClasesActions.updateClases),
        switchMap(({ courseId, clase }) =>
          this._clasesService.updateClassById(courseId, clase).pipe(
            map((updatedClases: Clase[]) => ClasesActions.updateClasesSuccess({ data: updatedClases })),
            catchError((error) => of(ClasesActions.updateClasesFailure({ error })))
          )
        )
      );
    });



  }
}

