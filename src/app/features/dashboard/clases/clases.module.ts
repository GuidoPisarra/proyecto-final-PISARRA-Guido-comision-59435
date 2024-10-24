import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [ClasesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule],
  exports: [ClasesComponent]
})
export class ClasesModule { }
