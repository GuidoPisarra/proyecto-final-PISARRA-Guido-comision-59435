import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../users/models';
import { Course } from '../../courses/models/course';
import { RegisterCourse } from '../models';

export const RegisterCourseActions = createActionGroup({
  source: 'Register Course',
  events: {
    'Load Register Courses': emptyProps(),
    'Load Register Courses Success': props<{ data: RegisterCourse[] }>(),
    'Load Register Courses Failure': props<{ error: Error }>(),

    'Create Register Course': props<{ productId: string; userId: string }>(),
    'Create Register Course Success': props<{ data: RegisterCourse }>(),
    'Create Register Course Failure': props<{ error: Error }>(),

    'Load Courses And User Options': emptyProps(),
    'Load Courses And User Options Success': props<{
      users: User[];
      courses: Course[];
    }>(),
    'Load Courses And User Options Failure': props<{ error: Error }>(),

  },
});
