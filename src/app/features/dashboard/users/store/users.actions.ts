import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../models';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ data: User[] }>(),
    'Load Users Failure': props<{ error: Error }>(),

    'Create Users': props<{ user: User }>(),
    'Create Users Success': props<{ data: User }>(),
    'Create Users Failure': props<{ error: Error }>(),

    'Update Users': props<{ user: User }>(),
    'Update Users Success': props<{ data: User[] }>(),
    'Update Users Failure': props<{ error: Error }>(),

    'Delete Users': props<{ userId: string }>(),
    'Delete Users Success': props<{ user: User[] }>(),
    'Delete Users Failure': props<{ error: Error }>(),

  },
});
