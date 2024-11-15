import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { registerCourseFeature } from './store/register-course.reducer';
import { RegisterCourseComponent } from './register-course.component';
import { RegisterCourseRoutingModule } from './register-course-routing.module';
import { RegisterCourseEffects } from './store/register-course.effects';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [RegisterCourseComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegisterCourseRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatOptionModule,
    StoreModule.forFeature(registerCourseFeature),
    EffectsModule.forFeature([RegisterCourseEffects]),
  ],
})
export class RegisterCourseModule { }
