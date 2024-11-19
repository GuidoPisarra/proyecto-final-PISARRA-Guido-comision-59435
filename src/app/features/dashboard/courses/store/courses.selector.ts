import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCourses from './courses.reducer';

export const selectCoursesState = createFeatureSelector<fromCourses.State>(
  fromCourses.courseFeatureKey
);

export const selectCourses = createSelector(
  selectCoursesState,
  (state) => state.courses
);

export const selectCoursesOptions = createSelector(
  selectCoursesState,
  (state) => state.courses
);

export const selectLoadCoursesError = createSelector(
  selectCoursesState,
  (state) => state.loadCoursesError
);

export const selectIsLoadingCourses = createSelector(
  selectCoursesState,
  (state) => state.isLoadingCourses
);

export const selectLoadStudentsOfCourses = createSelector(
  selectCoursesState,
  (state) => state.students
);
