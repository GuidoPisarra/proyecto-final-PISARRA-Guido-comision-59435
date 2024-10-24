import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../material/material.module';



@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
