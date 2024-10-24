import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseDialogComponent } from '../../courses/course-dialog/course-dialog.component';
import { generateRandomString } from '../../../../shared/utils';
import { Clase } from '../models/clase';

interface ClaseDialogData {
  editingClase?: Clase;
}
@Component({
  selector: 'app-clase-dialog',
  templateUrl: './clase-dialog.component.html',
  styles: ``,
})
export class ClaseDialogComponent {
  claseForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<CourseDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: ClaseDialogData
  ) {
    this.claseForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      date: [null, [Validators.required]],
      duration: [null, [Validators.required]]

    });
    this.patchFormValue();
  }

  private get isEditing() {
    return !!this.data?.editingClase;
  }

  patchFormValue() {
    if (this.data?.editingClase) {
      const { date, ...otherData } = this.data.editingClase;

      this.claseForm.patchValue({
        ...otherData,
        startDate: this.formatDate(date)
      });
    }
  }

  onSave(): void {
    if (this.claseForm.invalid) {
      this.claseForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.claseForm.value,
        id: this.isEditing
          ? this.data!.editingClase!.classId
          : generateRandomString(4),
        createdAt: this.isEditing
          ? this.data!.editingClase!.date
          : new Date(),
      });
    }
  }

  private formatDate(date: Date | string): string {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

}
