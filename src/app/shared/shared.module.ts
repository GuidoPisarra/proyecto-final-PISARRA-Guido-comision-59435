import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFullNamePipe } from './pipes/user-full-name.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { RepeatDirective } from './directives/repeat.directive';
import { TitleFontSizeDirective } from './directives/title-font-size.directive';
import { ErrorsTemplateComponent } from '../features/dashboard/errors-template/errors-template.component';
import { ToolBarComponent } from '../features/dashboard/tool-bar/tool-bar.component';
import { SideBarComponent } from '../features/dashboard/side-bar/side-bar.component';
import { MaterialModule } from '../material/material.module';
import { CoursesModule } from '../features/dashboard/courses/courses.module';

@NgModule({
  declarations: [
    UserFullNamePipe,
    HighlightDirective,
    RepeatDirective,
    TitleFontSizeDirective,
    ErrorsTemplateComponent,
    SideBarComponent,
    ToolBarComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [
    ReactiveFormsModule,
    UserFullNamePipe,
    RepeatDirective,
    TitleFontSizeDirective,
    ErrorsTemplateComponent,
    SideBarComponent,
    ToolBarComponent,
    MaterialModule
  ],
})
export class SharedModule { }
