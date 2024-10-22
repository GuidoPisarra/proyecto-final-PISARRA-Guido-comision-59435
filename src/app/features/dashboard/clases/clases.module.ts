import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [
    ClasesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ClasesModule { }
