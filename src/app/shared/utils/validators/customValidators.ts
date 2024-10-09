import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


export const UserNameValidator = Validators.compose([
  Validators.required,
  Validators.minLength(3),
  Validators.pattern(/^[a-zA-Z]+$/),

]);

export const EmailValidator: ValidatorFn = (control) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const valid = emailRegex.test(control.value);

  return valid ? null : { invalidEmail: true };
};
