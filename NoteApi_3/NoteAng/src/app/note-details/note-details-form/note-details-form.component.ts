import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteDetailsService } from '../../shared/note-details.service';

@Component({
  selector: 'app-note-details-form',
  templateUrl: './note-details-form.component.html',
  styles: [
  ]
})
export class NoteDetailsFormComponent implements OnInit {

  constructor(public service: NoteDetailsService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.postNoteDetail().subscribe(
      res => {

      },
      err => {
        console.log(err);
      });
  }

}
