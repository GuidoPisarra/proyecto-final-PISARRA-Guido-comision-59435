import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../../users/models';
import { RegisterCourse } from '../models';
import { Course } from '../../courses/models/course';
import { RegisterCourseActions } from './register-course.actions';

export const registerCoursesFeatureKey = 'registerCourses';

export interface State {
  isLoadingRegisterCourses: boolean;
  loadRegisterCoursesError: Error | null;
  registerCourse: RegisterCourse[];
  courseOptions: Course[];
  userOptions: User[];
}

export const initialState: State = {
  isLoadingRegisterCourses: false,
  loadRegisterCoursesError: null,
  registerCourse: [],
  courseOptions: [],
  userOptions: [],
};

export const reducer = createReducer(
  initialState,
  on(RegisterCourseActions.createRegisterCourse, (state) => {
    return {
      ...state,
      isLoadingRegisterCourses: true,
    };
  }),
  on(RegisterCourseActions.loadRegisterCourses, (state) => {
    return {
      ...state,
      isLoadingRegisterCourses: true,
    };
  }),
  on(RegisterCourseActions.loadRegisterCoursesSuccess, (state, action) => {
    return {
      ...state,
      registerCourse: action.data,
      loadRegisterCoursesError: null,
      isLoadingRegisterCourses: false,
    };
  }),
  on(RegisterCourseActions.loadCoursesAndUserOptionsFailure, (state, action) => {
    return {
      ...state,
      ...initialState,
      loadRegisterCoursesError: action.error,
      isLoadingRegisterCourses: false,
    };
  }),

  on(RegisterCourseActions.loadCoursesAndUserOptions, (state) => {
    return {
      ...state,
      isLoadingRegisterCourses: true,
    };
  }),
  on(RegisterCourseActions.loadCoursesAndUserOptionsSuccess, (state, action) => {
    return {
      ...state,
      loadRegisterCoursesError: null,
      isLoadingRegisterCourses: false,
      courseOptions: action.courses,
      userOptions: action.users,
    };
  }),
  on(RegisterCourseActions.loadCoursesAndUserOptionsFailure, (state, { error }) => {
    return {
      ...state,
      isLoadingRegisterCourses: false,
    };
  })
);

export const registerCourseFeature = createFeature({
  name: registerCoursesFeatureKey,
  reducer,
});
