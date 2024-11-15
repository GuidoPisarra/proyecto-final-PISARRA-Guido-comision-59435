import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HighlightDirective } from './directives/highlight.directive';
import { RepeatDirective } from './directives/repeat.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StudentFullNamePipe } from './pipes/student-full-name.pipe';
import { ErrorsTemplateComponent } from '../features/dashboard/errors-template/errors-template.component';

@NgModule({
  declarations: [
    StudentFullNamePipe,
    HighlightDirective,
    RepeatDirective,
    ErrorsTemplateComponent],
  imports: [CommonModule],
  exports: [
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    StudentFullNamePipe,
    HighlightDirective,
    RepeatDirective,
    FormsModule,
    ErrorsTemplateComponent
  ],
})
export class SharedModule { }
