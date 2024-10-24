import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarRoutingModule } from './side-bar-routing.module';
import { DashboardComponent } from '../dashboard.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from '../dashboard-routing.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SideBarRoutingModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatListModule,
    BrowserModule,
    DashboardRoutingModule


  ]
})
export class SideBarModule { }
