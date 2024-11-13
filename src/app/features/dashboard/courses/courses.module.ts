import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../../../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CourseDetailsModalComponent } from './course-details-modal/course-details-modal.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [CoursesComponent, CourseDialogComponent, CourseDetailsModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
    MatDialogModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
