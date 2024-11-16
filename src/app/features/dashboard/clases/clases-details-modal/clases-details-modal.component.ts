import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-clases-details-modal',
  templateUrl: './clases-details-modal.component.html',
  styles: ``
})
export class ClasesDetailsModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ClasesDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }

}
