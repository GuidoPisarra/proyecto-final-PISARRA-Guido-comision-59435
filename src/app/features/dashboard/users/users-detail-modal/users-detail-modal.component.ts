import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-detail-modal',
  templateUrl: './users-detail-modal.component.html',
  styles: ``
})
export class UsersDetailModalComponent {
  constructor(
    public dialogRef: MatDialogRef<UsersDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
