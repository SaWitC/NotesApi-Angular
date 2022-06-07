import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailsFormComponent } from './note-details-form.component';
//import { FormsModule } from '@angular/forms';
//imports: [
//  FormsModule
//]


describe('NoteDetailsFormComponent', () => {
  let component: NoteDetailsFormComponent;
  let fixture: ComponentFixture<NoteDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
