import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import {ToastrModule} from "ngx-toastr"

import { AppComponent } from './app.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NoteDetailsFormComponent } from './note-details/note-details-form/note-details-form.component';
import { HttpClientModule } from '@angular/common/http';

@
NgModule({
  declarations: [
    AppComponent,
    NoteDetailsComponent,
    NoteDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
