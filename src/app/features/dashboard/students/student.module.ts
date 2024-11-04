import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../../shared/shared.module';
import { ErrorsTemplateComponent } from '../errors-template/errors-template.component';
import { StudentComponent } from './student.component';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { StudentsRoutingModule } from './student-routing.module';

@NgModule({
  declarations: [StudentComponent, StudentDialogComponent, ErrorsTemplateComponent],
  imports: [CommonModule, StudentsRoutingModule, SharedModule],
  exports: [StudentComponent],
})
export class StudentsModule { }
