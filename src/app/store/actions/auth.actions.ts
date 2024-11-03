import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from './../../features/dashboard/users/models/index';


export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    "set Authenticated User": props<{ user: User }>(),
    "Unset Authenticated User": emptyProps()
  }
});
