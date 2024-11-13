import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-detail-modal',
  templateUrl: './student-detail-modal.component.html',
  styles: ``
})
export class StudentDetailModalComponent {
  constructor(
    public dialogRef: MatDialogRef<StudentDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
