import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { SharedModule } from '../../../shared/shared.module';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [UsersComponent, UserDialogComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule, ComponentsModule],
  exports: [UsersComponent],
})
export class UsersModule { }
