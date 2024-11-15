import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-detail-modal',
  templateUrl: './student-detail-modal.component.html',
  styleUrl: './student-detail-modal.component.scss'
})
export class StudentDetailModalComponent {
  constructor(
    public dialogRef: MatDialogRef<StudentDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = '../../../../../assets/avatars/noImage.jpg';
  }
}
