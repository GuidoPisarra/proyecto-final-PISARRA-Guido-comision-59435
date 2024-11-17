import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../models';
import { UsersActions } from './users.actions';

export const usersFeatureKey = 'users';

export interface State {
  user: User[];
  userOptions: User[];
  isLoadingUsers: boolean;
  loadUsersError: Error | null;
}

export const initialState: State = {
  isLoadingUsers: false,
  loadUsersError: null,
  user: [],
  userOptions: []
};

export const reducer = createReducer(
  initialState,
  on(UsersActions.createUsers, (state) => {
    return {
      ...state,
      isLoadingUsers: true,
    };
  }),
  on(UsersActions.createUsers, (state, { user }) => {
    return {
      ...state,
      loadUsersError: null,
      isLoadingUsers: false,
      userOptions: [...state.userOptions, user]
    };
  }),
  on(UsersActions.loadUsers, state => ({
    ...state,
    isLoadingUsers: true
  })),
  on(UsersActions.loadUsersSuccess, (state, { data }) => ({
    ...state,
    user: data,
    userOptions: data,
    isLoadingUsers: false
  })),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    isLoadingUsers: false
  })),
  on(UsersActions.updateUsersSuccess, (state, { data }) => ({
    ...state,
    user: data,
    userOptions: data,
  })),
  on(UsersActions.deleteUsersSuccess, (state, { user }) => ({
    ...state,
    user: user,
    userOptions: user,
  }))


);

export const usersFeature = createFeature({
  name: usersFeatureKey,
  reducer
});
