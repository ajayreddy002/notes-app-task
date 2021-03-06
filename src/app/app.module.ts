import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule}from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchFilter } from './filters/_searchfilter';
@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    HeaderComponent,
    SearchFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
