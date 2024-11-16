import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { SharedModule } from '../../../shared/shared.module';
import { ClasesRoutingModule } from './clases-routing.module';
import { ClaseDialogComponent } from './clase-dialog/clase-dialog.component';
import { ClasesDetailsModalComponent } from './clases-details-modal/clases-details-modal.component';
import { courseFeature } from '../courses/store/courses.reducer';
import { CoursesEffects } from '../courses/store/courses.effects';
import { clasesFeature } from './store/clases.reducer';
import { ClasesEffects } from './store/clases.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [ClasesComponent, ClaseDialogComponent, ClasesDetailsModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClasesRoutingModule,
    StoreModule.forFeature(courseFeature),
    StoreModule.forFeature(clasesFeature),
    EffectsModule.forFeature([CoursesEffects, ClasesEffects]),

  ],
  exports: [ClasesComponent]
})
export class ClasesModule { }
