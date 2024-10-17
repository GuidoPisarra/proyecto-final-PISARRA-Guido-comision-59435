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
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { UserFullNamePipe } from './pipes/user-full-name.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { RepeatDirective } from './directives/repeat.directive';
import { TitleFontSizeDirective } from './directives/title-font-size.directive';
import { ErrorsTemplateComponent } from '../features/dashboard/errors-template/errors-template.component';
@NgModule({
  declarations: [
    UserFullNamePipe,
    HighlightDirective,
    RepeatDirective,
    TitleFontSizeDirective,
    ErrorsTemplateComponent
  ],
  imports: [CommonModule],
  exports: [
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
    UserFullNamePipe,
    RepeatDirective,
    TitleFontSizeDirective,
    ErrorsTemplateComponent
  ],
})
export class SharedModule { }
