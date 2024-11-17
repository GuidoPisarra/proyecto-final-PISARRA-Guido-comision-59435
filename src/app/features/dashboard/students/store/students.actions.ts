import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Student } from '../models';

export const StudentsActions = createActionGroup({
  source: 'Student',
  events: {
    'Load Students': emptyProps(),
    'Load Students Success': props<{ data: Student[] }>(),
    'Load Students Failure': props<{ error: Error }>(),

    'Create Students': props<{ student: Student }>(),
    'Create Students Success': props<{ data: Student }>(),
    'Create Students Failure': props<{ error: Error }>(),

    'Update Students': props<{ student: Student }>(),
    'Update Students Success': props<{ data: Student[] }>(),
    'Update Students Failure': props<{ error: Error }>(),

    'Delete Students': props<{ studentId: string }>(),
    'Delete Students Success': props<{ student: Student[] }>(),
    'Delete Students Failure': props<{ error: Error }>(),

  },
});
