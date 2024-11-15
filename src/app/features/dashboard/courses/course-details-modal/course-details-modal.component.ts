import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-course-details-modal',
  templateUrl: './course-details-modal.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailsModalComponent {
  constructor(
    public dialogRef: MatDialogRef<CourseDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }

  register(): void {

  }
}
