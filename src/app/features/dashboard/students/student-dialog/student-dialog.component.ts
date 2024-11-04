import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generateRandomString } from '../../../../shared/utils';
import { Student } from '../models';
import { EmailValidator, StudentNameValidator } from '../../../../shared/utils/validators/customValidators';

interface StudentDialogData {
  editingStudent?: Student;
}

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styles: ``,
})
export class StudentDialogComponent {
  studentForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<StudentDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: StudentDialogData
  ) {
    this.studentForm = this.formBuilder.group({
      firstName: [null, [Validators.required, StudentNameValidator]],
      lastName: [null, [Validators.required, StudentNameValidator]],
      email: [null, [EmailValidator]],
    });
    this.patchFormValue();
  }

  private get isEditing() {
    return !!this.data?.editingStudent;
  }

  patchFormValue() {
    if (this.data?.editingStudent) {
      this.studentForm.patchValue(this.data.editingStudent);
    }
  }

  onSave(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.studentForm.value,
        id: this.isEditing
          ? this.data!.editingStudent!.id
          : generateRandomString(4),
        createdAt: this.isEditing
          ? this.data!.editingStudent!.createdAt
          : new Date(),
      });
    }
  }

  get firstName() {
    return this.studentForm.get('firstName');
  }
  get lastName() {
    return this.studentForm.get('lastName');
  }
  get email() {
    return this.studentForm.get('email');
  }

}
