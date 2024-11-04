import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { Student } from '../../features/dashboard/students/models';

export const authFeatureName = 'auth';

export interface AuthState {
  authenticatedStudent: Student | null;
}

const initialState: AuthState = {
  authenticatedStudent: null,
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
  })
);
