import { Injectable } from '@angular/core';
import { NoteDetails } from './note-details.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteDetailsService {

  constructor(private http: HttpClient) { }
  formData: NoteDetails = new NoteDetails();

  readonly baseUrl = 'http://localhost:22974/api/Notes';

  postNoteDetail() {
    return this.http.post(this.baseUrl, this.formData)
  }
}
