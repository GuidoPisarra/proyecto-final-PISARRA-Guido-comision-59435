import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { StudentComponent } from './student.component';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { StudentsRoutingModule } from './student-routing.module';
import { StudentDetailModalComponent } from './student-detail-modal/student-detail-modal.component';
import { studentsFeature } from './store/students.reducer';
import { StudentsEffects } from './store/students.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    StudentComponent,
    StudentDialogComponent,
    StudentDetailModalComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    StoreModule.forFeature(studentsFeature),
    EffectsModule.forFeature([StudentsEffects]),
  ],
  exports: [StudentComponent],
})
export class StudentsModule { }
