import { Component, OnInit } from '@angular/core';
import {NoteDetailsService } from '../shared/note-details.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styles: [
  ]
})
export class NoteDetailsComponent implements OnInit {

  constructor(public  service:NoteDetailsService) { }

  ngOnInit(): void {
    this.service.refreshList();
    console.log(this.service.refreshList());
  }


}
