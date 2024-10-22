import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generateRandomString } from '../../../../shared/utils';
import { User } from '../../../../core/models';
import { EmailValidator, UserNameValidator } from '../../../../shared/utils/validators/customValidators';

interface UserDialogData {
  editingUser?: User;
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styles: ``
})
export class UserDialogComponent {
  userForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<UserDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: UserDialogData
  ) {
    this.userForm = this.formBuilder.group({
      firstName: [null, [UserNameValidator]],
      lastName: [null, [UserNameValidator]],
      email: [null, [Validators.required, EmailValidator]],
    });
    this.patchFormValue();
  }

  private get isEditing() {
    return !!this.data?.editingUser;
  }

  patchFormValue() {
    if (this.data?.editingUser) {
      this.userForm.patchValue(this.data.editingUser);
    }
  }

  onSave(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.userForm.value,
        id: this.isEditing
          ? this.data!.editingUser!.id
          : generateRandomString(4),
        createdAt: this.isEditing
          ? this.data!.editingUser!.createdAt
          : new Date(),
      });
    }
  }


  get firstNameControl() {
    return this.userForm.get('firstName');
  }


  get firstNameControlHasPatternError() {
    return (
      this.firstNameControl?.hasError('pattern') &&
      this.firstNameControl.touched
    );
  }

  get firstNameControlHasRequiredError() {
    return (
      this.firstNameControl?.hasError('required') &&
      this.firstNameControl.touched
    );
  }

  get firstNameControlHasMinLengthError() {
    return (
      this.firstNameControl?.hasError('minlength') &&
      this.firstNameControl.touched
    );
  }

  get lastNameControl() {
    return this.userForm.get('lastName');
  }

  get lastNameControlHasPatternError() {
    return (
      this.lastNameControl?.hasError('pattern') &&
      this.lastNameControl.touched
    );
  }

  get lastNameControlHasRequiredError() {
    return (
      this.lastNameControl?.hasError('required') &&
      this.lastNameControl.touched
    );
  }

  get lastNameControlHasMinLengthError() {
    return (
      this.lastNameControl?.hasError('minlength') &&
      this.lastNameControl.touched
    );
  }

  get emailControl() {
    return this.userForm.get('email');
  }

  get emailControlHasRequiredError() {
    return this.emailControl?.hasError('required') && this.emailControl.touched;
  }

  get emailControlHasEmailError() {
    return this.emailControl?.hasError('email') && this.emailControl.touched;
  }
  get emailControlHasCustomEmailError() {
    return this.emailControl?.hasError('invalidEmail') && this.emailControl.touched;
  }
}
