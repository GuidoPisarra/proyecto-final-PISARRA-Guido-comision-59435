import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './student-routing.module';

import { SharedModule } from '../../../shared/shared.module';
import { ErrorsTemplateComponent } from '../errors-template/errors-template.component';
import { StudentComponent } from './student.component';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';

@NgModule({
  declarations: [StudentComponent, StudentDialogComponent, ErrorsTemplateComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
  exports: [StudentComponent],
})
export class StudentsModule { }
