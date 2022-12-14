import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { MatFormFieldModule } from '@angular/material/form-field';

import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatFormFieldModule],
  exports: [MatFormFieldModule],
  declarations: [AppComponent, HeroFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
