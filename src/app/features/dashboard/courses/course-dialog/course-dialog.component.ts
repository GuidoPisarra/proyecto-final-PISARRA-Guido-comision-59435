import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../models/course';
import { generateRandomID } from '../../../../shared/utils';

interface CourseDialogData {
  editingCourse?: Course;
}

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styles: ``,
})
export class CourseDialogComponent {
  courseForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<CourseDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: CourseDialogData
  ) {
    this.courseForm = this.formBuilder.group({
      profesor: [null, [Validators.required]],
      commitee: [null, [Validators.required]],
      course: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
    });
    this.patchFormValue();
  }

  private get isEditing() {
    return !!this.data?.editingCourse;
  }

  patchFormValue() {
    if (this.data?.editingCourse) {
      const { startDate, endDate, ...otherData } = this.data.editingCourse;

      this.courseForm.patchValue({
        ...otherData,
        startDate: this.formatDate(startDate),
        endDate: this.formatDate(endDate)
      });
    }
  }

  onSave(): void {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.courseForm.value,
        id: this.isEditing
          ? this.data!.editingCourse!.id
          : generateRandomID(4),
        createdAt: this.isEditing
          ? this.data!.editingCourse!.createdAt
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
