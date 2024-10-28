import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideAnimationsAsync(), provideNativeDateAdapter(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule { }
//
//nueva forma de utilizar http
//provideHttpClient(withFetch())
