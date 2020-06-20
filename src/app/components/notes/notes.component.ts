import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { INotesModel } from 'src/app/_models/notes.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @ViewChild('textarea') textarea: ElementRef;
  notesText = '';
  notesList: INotesModel[] = [];
  notesText2 = '';
  currentDate = new Date();
  id = 1;
  counter: number;
  isReady: boolean;
  clickedNote: any;
  constructor() { }

  ngOnInit(): void {
  }
  getText(e) {
    if (e.target.value) {
      this.isReady = true;
      if(this.clickedNote !== undefined && this.clickedNote !== null){
        this.clickedNote.title = this.notesText
      }
    }
  }
  // onFocus (e){
  //   if(this.notesText === '' && this.notesList.length === 0){
  //     this.notesList.push({id: this.id,title: 'New Notes', description: 'No additioanl content',
  //      createdDate: new Date(), upDatedDate: new Date()})
  //      console.log(this.notesList)
  //   }
  // }
  addNotesToArray(event) {
    if (event === true) {
      if (this.clickedNote !== undefined && this.clickedNote !== null) {
        this.notesList.map(item => {
          if (item.id === this.clickedNote.id) {
            item.title = this.notesText;
            item.createdDate = new Date()
          }
        })
        this.clickedNote = null;
      } else {
        this.notesList.push({
          title: this.notesText,
          description: 'No additioanl content',
          createdDate: new Date(),
          upDatedDate: new Date(),
          id: this.id++
        });
        this.clickedNote = null;
      }
      this.notesText = '';
    }
  }
  onEnter(thing: HTMLTextAreaElement) {
    console.log(thing);
    this.counter = ++thing.rows;
    console.log("textarea.rows:", this.counter);
  }
  editNotes(note) {
    this.clickedNote = note;
    this.isReady = false;
    this.notesText = note.title
  }
  deleteNotes(event: any) {
    if (event === true) {
      const index = this.notesList.findIndex(index => this.clickedNote.id === index.id);
      this.notesList.splice(index, 1)
      this.clickedNote = null;
    }
    if(this.notesList.length <= 0){
      this.isReady = true;
      this.notesText = ''
    }
  }
}
