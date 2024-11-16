import { createFeature, createReducer, on } from '@ngrx/store';
import { Clase } from '../models/clase';
import { ClasesActions } from './clases.actions';

export const clasesFeatureKey = 'clases';

export interface State {
  isLoadingClases: boolean;
  loadClasesError: Error | null;
  clase: Clase[];
  claseOptions: Clase[];
}

export const initialState: State = {
  isLoadingClases: false,
  loadClasesError: null,
  clase: [],
  claseOptions: []
};

export const reducer = createReducer(
  initialState,
  on(ClasesActions.createClases, (state) => {
    return {
      ...state,
      isLoadingRegisterCourses: true,
    };
  }),
  on(ClasesActions.loadClases, (state) => {
    return {
      ...state,
      isLoadingClases: true,
    };
  }),
  on(ClasesActions.loadClasesSuccess, (state, { data }) => {
    return {
      ...state,
      clases: data,
      loadClasesError: null,
      isLoadingClases: false,
    };
  }),
  on(ClasesActions.deleteClasesSuccess, (state, { clase }) => ({
    ...state,
    clases: clase,
  }))


);

export const clasesFeature = createFeature({
  name: clasesFeatureKey,
  reducer
});
