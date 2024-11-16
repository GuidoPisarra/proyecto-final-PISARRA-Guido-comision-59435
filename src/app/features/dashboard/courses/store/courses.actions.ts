import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course } from '../models/course';

export const CoursesActions = createActionGroup({
  source: 'Course',
  events: {
    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ courses: Course[] }>(),
    'Load Courses Failure': props<{ error: Error }>(),

    'Create Courses': props<{ course: Omit<Course, 'id'> }>(),
    'Create Courses Success': props<{ data: Course }>(),
    'Create Courses Failure': props<{ error: Error }>(),

    'Update Courses': props<{ course: Course }>(),
    'Update Courses Success': props<{ data: Course }>(),
    'Update Courses Failure': props<{ error: Error }>(),

    'Delete Courses': props<{ courseId: string }>(),
    'Delete Courses Success': props<{ courses: Course[] }>(),
    'Delete Courses Failure': props<{ error: Error }>(),

  },
});
