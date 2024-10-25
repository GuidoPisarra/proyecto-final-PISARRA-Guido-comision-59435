import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { SharedModule } from '../../../shared/shared.module';
import { ClasesRoutingModule } from './clases-routing.module';
import { ClaseDialogComponent } from './clase-dialog/clase-dialog.component';

@NgModule({
  declarations: [ClasesComponent, ClaseDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClasesRoutingModule
  ],
  exports: [ClasesComponent]
})
export class ClasesModule { }
