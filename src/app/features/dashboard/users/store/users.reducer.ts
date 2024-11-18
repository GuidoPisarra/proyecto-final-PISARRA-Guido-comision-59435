import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../models';
import { UsersActions } from './users.actions';
import { Course } from '../../courses/models/course';

export const usersFeatureKey = 'users';

export interface State {
  user: User[];
  userOptions: User[];
  isLoadingUsers: boolean;
  loadUsersError: Error | null;
  userCourses: Course[]
}

export const initialState: State = {
  isLoadingUsers: false,
  loadUsersError: null,
  user: [],
  userOptions: [],
  userCourses: []
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
      user: [...state.userOptions, user]
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
  })),
  on(UsersActions.loadUserCourses, (state) => ({
    ...state,
  })),
  on(UsersActions.loadUserCoursesSuccess, (state, { courses }) => ({
    ...state,
    userCourses: courses,
  })),
  on(UsersActions.removeUserCourse, (state) => ({
    ...state,
  })),
  on(UsersActions.removeUserCourseSuccess, (state, { courses }) => ({
    ...state,
    userCourses: courses,
  })),
  on(UsersActions.removeUserCourseFailure, (state, { error }) => ({
    ...state,
    loadUsersError: error,
  })),


  on(UsersActions.clearUserCourses, state => ({
    ...state,
    userCourses: []
  })),

);

export const usersFeature = createFeature({
  name: usersFeatureKey,
  reducer
});
