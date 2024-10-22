import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarRoutingModule } from './side-bar-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SideBarRoutingModule,
    RouterModule
  ]
})
export class SideBarModule { }
