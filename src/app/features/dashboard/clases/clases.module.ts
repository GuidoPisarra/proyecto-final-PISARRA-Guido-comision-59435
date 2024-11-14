import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { SharedModule } from '../../../shared/shared.module';
import { ClasesRoutingModule } from './clases-routing.module';
import { ClaseDialogComponent } from './clase-dialog/clase-dialog.component';
import { ClasesDetailsModalComponent } from './clases-details-modal/clases-details-modal.component';

@NgModule({
  declarations: [ClasesComponent, ClaseDialogComponent, ClasesDetailsModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClasesRoutingModule
  ],
  exports: [ClasesComponent]
})
export class ClasesModule { }
