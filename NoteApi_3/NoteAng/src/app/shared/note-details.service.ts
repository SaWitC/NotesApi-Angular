import { Injectable } from '@angular/core';
import { NoteDetails } from './note-details.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteDetailsService {

  constructor(private http: HttpClient) { }
  formData: NoteDetails = new NoteDetails();
  list:NoteDetails[];

  readonly baseUrl = 'http://localhost:22974/api/Notes';

  postNoteDetail() {
    return this.http.post(this.baseUrl, this.formData);
  }
  putNoteDetail() {
    return this.http.put(`${this.baseUrl}/${this.formData.id}`, this.formData);
  }

  removeNoteData(id:number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  completeNote(id: number) {
    return this.http.post(`http://localhost:22974/api/Notes/Complete/${id}`, id);
  }

  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise().then(res => {
        this.list = res as NoteDetails[];
        console.log(res as NoteDetails[]);
      });
    //console.log("dd" + );
  }
  //RemoweNote(selected:NoteDetails) {
  //  this.http.delete(this.baseUrl,selected.id).toPromise()
  //}
}
