import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersDetailModalComponent } from './users-detail-modal/users-detail-modal.component';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersFeature } from './store/users.reducer';
import { UsersEffects } from './store/users.effects';

@NgModule({
  declarations: [
    UsersComponent,
    UsersDetailModalComponent,
    UsersDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    StoreModule.forFeature(usersFeature),
    EffectsModule.forFeature([UsersEffects]),
  ],
  exports: [UsersComponent],
})
export class UsersModule { }
