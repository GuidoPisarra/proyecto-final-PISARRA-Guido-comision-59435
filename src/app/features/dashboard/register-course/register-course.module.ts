import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { registerCourseFeature } from './store/register-course.reducer';
import { SharedModule } from '../../../shared/shared.module';
import { RegisterCourseComponent } from './register-course.component';
import { RegisterCourseRoutingModule } from './register-course-routing.module';
import { RegisterCourseEffects } from './store/register-course.effects';

@NgModule({
  declarations: [RegisterCourseComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegisterCourseRoutingModule,
    StoreModule.forFeature(registerCourseFeature),
    EffectsModule.forFeature([RegisterCourseEffects]),
  ],
})
export class RegisterCourseModule { }
