import { createReducer, on } from '@ngrx/store';
import { AuthActions, setPageTitle } from '../actions/auth.actions';
import { Student } from '../../features/dashboard/students/models';

export const authFeatureName = 'auth';

export interface AuthState {
  authenticatedStudent: Student | null;
  pageTitle: string;
}

const initialState: AuthState = {
  authenticatedStudent: null,
  pageTitle: ''

};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.setAuthenticatedStudent, (state, action) => {
    return {
      ...state,
      authenticatedStudent: action.student,
    };
  }),
  on(AuthActions.unsetAuthenticatedStudent, (state) => {
    return {
      ...state,
      authenticatedStudent: null,
    };
  }),
  on(setPageTitle, (state, { title }) => ({ ...state, pageTitle: title }))

);
