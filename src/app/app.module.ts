import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootReducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { CourseDetailsModalComponent } from './features/dashboard/courses/course-details-modal/course-details-modal.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(RootReducer, {}), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), EffectsModule.forRoot([])],
  providers: [provideAnimationsAsync(), provideNativeDateAdapter(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule { }
//
//nueva forma de utilizar http
//provideHttpClient(withFetch())
