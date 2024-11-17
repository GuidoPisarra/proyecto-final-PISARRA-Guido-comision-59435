import { createFeature, createReducer, on } from '@ngrx/store';
import { Student } from '../models';
import { StudentsActions } from './students.actions';


export const studentsFeatureKey = 'students';

export interface State {
  student: Student[];
  studentOptions: Student[];
  isLoadingStudents: boolean;
  loadStudentsError: Error | null;
}

export const initialState: State = {
  isLoadingStudents: false,
  loadStudentsError: null,
  student: [],
  studentOptions: []
};

export const reducer = createReducer(
  initialState,
  on(StudentsActions.createStudents, (state) => {
    return {
      ...state,
      isLoadingStudents: true,
    };
  }),
  on(StudentsActions.createStudentsSuccess, (state, { data }) => {
    return {
      ...state,
      loadStudentsError: null,
      isLoadingStudents: false,
      studentOptions: [...state.studentOptions, data]
    };
  }),
  on(StudentsActions.loadStudents, state => ({
    ...state,
    loading: true
  })),
  on(StudentsActions.loadStudentsSuccess, (state, { data }) => ({
    ...state,
    student: data,
    studentOptions: data,
    loading: false
  })),
  on(StudentsActions.loadStudentsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(StudentsActions.updateStudentsSuccess, (state, { data }) => ({
    ...state,
    student: data,
    studentOptions: data,
  })),
  on(StudentsActions.deleteStudentsSuccess, (state, { student }) => ({
    ...state,
    student: student,
    studentOptions: student,
  }))


);

export const studentsFeature = createFeature({
  name: studentsFeatureKey,
  reducer
});
