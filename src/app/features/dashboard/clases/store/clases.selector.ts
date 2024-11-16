import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClases from './clases.reducer';

export const selectClasesState = createFeatureSelector<fromClases.State>(
  fromClases.clasesFeatureKey
);

export const selectClases = createSelector(
  selectClasesState,
  (state) => state.clase
);

export const selectClasesOptions = createSelector(
  selectClasesState,
  (state) => state.claseOptions
);


export const selectLoadClasesError = createSelector(
  selectClasesState,
  (state) => state.loadClasesError
);

export const selectIsLoadingClases = createSelector(
  selectClasesState,
  (state) => state.isLoadingClases
);
