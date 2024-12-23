import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureName, AuthState } from '../reducers/auth.reducer';

export const selectAuthState =
  createFeatureSelector<AuthState>(authFeatureName);

export const selectAutheticatedStudent = createSelector(
  selectAuthState,
  (state) => state.authenticatedStudent
);

export const selectPageTitle = createSelector(
  selectAuthState,
  (state: AuthState) => state.pageTitle
);
