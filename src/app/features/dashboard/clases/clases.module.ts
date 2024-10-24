import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { SharedModule } from '../../../shared/shared.module';
import { ClasesRoutingModule } from './clases-routing.module';

@NgModule({
  declarations: [ClasesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClasesRoutingModule
  ],
  exports: [ClasesComponent]
})
export class ClasesModule { }
