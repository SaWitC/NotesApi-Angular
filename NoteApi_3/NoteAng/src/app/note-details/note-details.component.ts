import { Component, OnInit } from '@angular/core';
import {NoteDetailsService } from '../shared/note-details.service';
import {NoteDetails} from "../shared/note-details.model";
import { NgForm } from "@angular/forms/index";
import { ToastrService } from 'ngx-toastr'



@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styles: [
  ]
})
export class NoteDetailsComponent implements OnInit {

  constructor(public service: NoteDetailsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
    console.log(this.service.refreshList());
  }

  PutData(selected:NoteDetails) {
    this.service.formData = selected;
  }


//  this.service.postNoteDetail().subscribe(
//    res => {
//  this.resetForm(form);
//  this.toastr.success("Data submited", "Note Detail Register");
//},
//err => {
//  console.log(err);
//});

  RemoweData(id: number) {
    this.service.removeNoteData(id).subscribe(
      res => {
        this.toastr.success("Deleted", "111 222 333");
        this.service.refreshList();

      },
    err => {
      console.log("Error"+id);
    })
/*    this.service.removeNoteData(id);*/
  }


}
