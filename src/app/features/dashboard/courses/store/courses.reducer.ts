import { createFeature, createReducer, on } from '@ngrx/store';
import { CoursesActions } from './courses.actions';
import { Course } from '../models/course';

export const courseFeatureKey = 'course';

export interface State {
  isLoadingCourses: boolean;
  loadCoursesError: Error | null;
  courses: Course[];
}

export const initialState: State = {
  isLoadingCourses: false,
  loadCoursesError: null,
  courses: [],
};

export const reducer = createReducer(
  initialState,
  on(CoursesActions.createCourses, (state) => {
    return {
      ...state,
      isLoadingRegisterCourses: true,
    };
  }),
  on(CoursesActions.createCoursesSuccess, (state, { data }) => {
    return {
      ...state,
      courses: [...state.courses, data]
    };
  }),
  on(CoursesActions.loadCourses, (state) => {
    return {
      ...state,
      isLoadingCourses: true,
    };
  }),
  on(CoursesActions.loadCoursesSuccess, (state, { courses }) => {
    return {
      ...state,
      courses: courses,
      isLoadingCourses: false,
    };
  }),
  on(CoursesActions.deleteCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses: courses,
  })),

  on(CoursesActions.updateCoursesSuccess, (state, { data }) => {
    return {
      ...state,
      courses: state.courses.map(course =>
        course.id === data.id ? { ...course, ...data } : course
      ),
    };
  }),
);

export const courseFeature = createFeature({
  name: courseFeatureKey,
  reducer
});
