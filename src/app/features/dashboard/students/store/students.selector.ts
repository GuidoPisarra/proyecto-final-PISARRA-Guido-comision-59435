import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudents from './students.reducer';

export const selectStudentsState = createFeatureSelector<fromStudents.State>(
  fromStudents.studentsFeatureKey
);

export const selectStudents = createSelector(
  selectStudentsState,
  (state) => state.student
);

export const selectStudentsOptions = createSelector(
  selectStudentsState,
  (state) => state.studentOptions
);


export const selectLoadStudentsSuccess = createSelector(
  selectStudentsState,
  (state) => state.studentOptions
);

export const selectLoadStudentsError = createSelector(
  selectStudentsState,
  (state) => state.loadStudentsError
);

export const selectIsLoadingStudents = createSelector(
  selectStudentsState,
  (state) => state.isLoadingStudents
);
