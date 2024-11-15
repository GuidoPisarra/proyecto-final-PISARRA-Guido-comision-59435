import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegisterCourse from './register-course.reducer';

export const selectRegisterCourseState = createFeatureSelector<fromRegisterCourse.State>(
  fromRegisterCourse.registerCoursesFeatureKey
);

export const selectRegirterCourses = createSelector(
  selectRegisterCourseState,
  (state) => state.registerCourse
);

export const selectCoursesOptions = createSelector(
  selectRegisterCourseState,
  (state) => state.courseOptions
);

export const selectUserOptions = createSelector(
  selectRegisterCourseState,
  (state) => state.userOptions
);

export const selectLoadRegisterCourseError = createSelector(
  selectRegisterCourseState,
  (state) => state.loadRegisterCoursesError
);

export const selectIsLoadingRegisterCourse = createSelector(
  selectRegisterCourseState,
  (state) => state.isLoadingRegisterCourses
);
