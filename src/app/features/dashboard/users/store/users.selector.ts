import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';

export const selectUsersState = createFeatureSelector<fromUsers.State>(
  fromUsers.usersFeatureKey
);

export const selectUsers = createSelector(
  selectUsersState,
  (state) => state.user
);

export const selectUsersOptions = createSelector(
  selectUsersState,
  (state) => state.userOptions
);


export const selectLoadUsersSuccess = createSelector(
  selectUsersState,
  (state) => state.userOptions
);

export const selectLoadUsersError = createSelector(
  selectUsersState,
  (state) => state.loadUsersError
);

export const selectIsLoadingUsers = createSelector(
  selectUsersState,
  (state) => state.isLoadingUsers
);

export const selectUserCourses = createSelector(
  selectUsersState,
  (state) => state.userCourses
);
