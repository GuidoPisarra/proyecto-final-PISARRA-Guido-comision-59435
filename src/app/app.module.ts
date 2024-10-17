import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { USERS_URL } from './core/providers'


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, DashboardModule],
  providers: [provideAnimationsAsync(), provideNativeDateAdapter(), USERS_URL],
  bootstrap: [AppComponent],
})
export class AppModule { }
