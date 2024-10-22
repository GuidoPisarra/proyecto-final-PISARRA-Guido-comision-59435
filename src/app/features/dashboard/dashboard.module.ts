import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsersModule } from './users/users.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from '../../material/material.module';
import { ClasesComponent } from './clases/clases.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [DashboardComponent, ClasesComponent, CoursesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UsersModule,
    SharedModule,
    HomeModule,
    MaterialModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
