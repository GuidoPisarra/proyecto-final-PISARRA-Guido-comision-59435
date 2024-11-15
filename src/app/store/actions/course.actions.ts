import { createActionGroup, props } from '@ngrx/store';
import { Student } from '../../features/dashboard/students/models';


export const RegisterActions = createActionGroup({
  source: 'Auth',
  events: {
    "Register Course": props<{ courseId: number, student: Student }>(),
  }
});


