import { Validators } from '@angular/forms';


export const StudentNameValidator = Validators.compose([
  Validators.required,
  Validators.minLength(3),
  Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/),

]);

export const EmailValidator = Validators.compose([
  Validators.required,
  Validators.email,
]);
