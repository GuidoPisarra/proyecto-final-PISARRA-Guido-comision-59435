import { createFeature, createReducer, on } from '@ngrx/store';
import { Student } from '../models';
import { StudentsActions } from './students.actions';
import { Course } from '../../courses/models/course';


export const studentsFeatureKey = 'students';

export interface State {
  courses: Course[];
  student: Student[];
  studentOptions: Student[];
  isLoadingStudents: boolean;
  loadStudentsError: Error | null;
}

export const initialState: State = {
  isLoadingStudents: false,
  loadStudentsError: null,
  student: [],
  studentOptions: [],
  courses: []
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
  })),
  on(StudentsActions.loadStudentCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    error: null,
  })),
  on(StudentsActions.loadStudentCoursesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(StudentsActions.removeCourseSuccess, (state, { course }) => {
    console.log('Cursos después de eliminar:', course);
    return {
      ...state,
      courses: course
    };
  }),
  on(StudentsActions.clearStudentCourses, state => ({
    ...state,
    courses: []
  })),
);


export const studentsFeature = createFeature({
  name: studentsFeatureKey,
  reducer
});
