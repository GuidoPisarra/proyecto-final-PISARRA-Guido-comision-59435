import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsersModule } from './users/users.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeModule } from './home/home.module';
import { MaterialModule } from '../../material/material.module';
import { ClasesModule } from './clases/clases.module';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UsersModule,
    SharedModule,
    HomeModule,
    MaterialModule,
    ClasesModule,
    CoursesModule,
  ],
  exports: [DashboardComponent, MaterialModule],
})
export class DashboardModule { }
