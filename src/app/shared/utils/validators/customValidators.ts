import { ValidatorFn, Validators } from '@angular/forms';

export const nameValidator: ValidatorFn = (control) => {

  return null;
};

export const UserNameValidator = Validators.compose([
  Validators.required,
  Validators.minLength(3),
  Validators.pattern(/^[a-zA-Z]+$/),
  nameValidator,
]);
