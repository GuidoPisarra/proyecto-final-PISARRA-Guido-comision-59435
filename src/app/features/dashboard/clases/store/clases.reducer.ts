import { createFeature, createReducer, on } from '@ngrx/store';
import { Clase } from '../models/clase';
import { ClasesActions } from './clases.actions';

export const clasesFeatureKey = 'clases';

export interface State {
  clase: Clase[];
  claseOptions: Clase[];
  isLoadingClases: boolean;
  loadClasesError: Error | null;
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
      isLoadingClases: true,
    };
  }),
  on(ClasesActions.createClasesSuccess, (state, { data }) => {
    return {
      ...state,
      loadClasesError: null,
      isLoadingClases: false,
      claseOptions: [...state.claseOptions, data]
    };
  }),
  on(ClasesActions.loadClases, state => ({
    ...state,
    loading: true
  })),
  on(ClasesActions.loadClasesSuccess, (state, { data }) => ({
    ...state,
    clases: data,
    claseOptions: data,
    loading: false
  })),
  on(ClasesActions.loadClasesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(ClasesActions.updateClasesSuccess, (state, { data }) => ({
    ...state,
    claseOptions: data,
  })),
  on(ClasesActions.deleteClasesSuccess, (state, { clase }) => ({
    ...state,
    clases: clase,
  }))


);

export const clasesFeature = createFeature({
  name: clasesFeatureKey,
  reducer
});
