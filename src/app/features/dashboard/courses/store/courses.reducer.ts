import { createFeature, createReducer, on } from '@ngrx/store';
import { CoursesActions } from './courses.actions';
import { Course } from '../models/course';
import { Student } from '../../students/models';

export const courseFeatureKey = 'course';

export interface State {
  isLoadingCourses: boolean;
  loadCoursesError: Error | null;
  courses: Course[];
  students: Student[]
}

export const initialState: State = {
  isLoadingCourses: false,
  loadCoursesError: null,
  courses: [],
  students: []
};

export const reducer = createReducer(
  initialState,
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
  on(CoursesActions.loadStudentsOfCourses, (state, { courseId }) => {
    return {
      ...state
    };
  }),
  on(CoursesActions.loadStudentsOfCoursesSuccess, (state, { students }) => {
    return {
      ...state,
      students: students
    };
  }),
);

export const courseFeature = createFeature({
  name: courseFeatureKey,
  reducer
});
