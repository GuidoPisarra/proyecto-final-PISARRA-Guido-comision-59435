import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../../../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CourseDetailsModalComponent } from './course-details-modal/course-details-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { courseFeature } from './store/courses.reducer';
import { CoursesEffects } from './store/courses.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { studentsFeature } from '../students/store/students.reducer';
import { StudentsEffects } from '../students/store/students.effects';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseDialogComponent,
    CourseDetailsModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
    MatDialogModule,
    StoreModule.forFeature(courseFeature),
    StoreModule.forFeature(studentsFeature),
    EffectsModule.forFeature([CoursesEffects, StudentsEffects]),
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
