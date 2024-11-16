import { createActionGroup, props } from '@ngrx/store';
import { Clase } from '../models/clase';

export const ClasesActions = createActionGroup({
  source: 'Clase',
  events: {
    'Load Clases': props<{ courseId: string }>(),
    'Load Clases Success': props<{ data: Clase[] }>(),
    'Load Clases Failure': props<{ error: Error }>(),

    'Create Clases': props<{ courseId: string }>(),
    'Create Clases Success': props<{ data: Clase }>(),
    'Create Clases Failure': props<{ error: Error }>(),

    'Update Clases': props<{ courseId: string, clase: Clase }>(),
    'Update Clases Success': props<{ data: Clase }>(),
    'Update Clases Failure': props<{ error: Error }>(),

    'Delete Clases': props<{ courseId: string, clase: Clase }>(),
    'Delete Clases Success': props<{ clase: Clase }>(),
    'Delete Clases Failure': props<{ error: Error }>(),

  },
});
