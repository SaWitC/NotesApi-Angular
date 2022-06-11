import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteDetailsService } from '../../shared/note-details.service';
import { ToastrService } from 'ngx-toastr'

import { NoteDetails } from "src/app/shared/note-details.model"

@Component({
  selector: 'app-note-details-form',
  templateUrl: './note-details-form.component.html',
  styles: [
  ]
})
export class NoteDetailsFormComponent implements OnInit {

  constructor(public service: NoteDetailsService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0) {
      this.createNote(form);
    } else {
      this.updateNote(form);
    }
  }

  createNote(form: NgForm) {
    this.service.postNoteDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success("Data submited", "Note Detail Register");
      },
      err => {
        console.log(err);
      });
  }
  updateNote(form: NgForm) {
    this.service.putNoteDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info("Data Updated", "Note Detail Register");
      },
      err => {
        console.log(err);
      });
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new NoteDetails();
  }

}
