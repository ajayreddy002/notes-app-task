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
  filteredList: INotesModel[] = [];
  isCollapse = false;
  searchValue: any;
  constructor() { }

  ngOnInit(): void {
  }
  getText(e) {
    // Inorder to update the time 
    this.currentDate = new Date();
    if (e.target.value) {
      this.isReady = true;
      if (this.clickedNote !== undefined && this.clickedNote !== null) {
        this.clickedNote.title = this.notesText
      }
    }
  }

  addNotesToArray(event) {
    if (event === true) {
      // Here checking is it for edit or add
      if (this.clickedNote !== undefined && this.clickedNote !== null) {
        this.notesList.map(item => {
          if (item.id === this.clickedNote.id) {
            item.title = this.notesText;
            item.createdDate = new Date()
          }
        });
        this.filteredList = this.notesList;
        this.clickedNote = null;
      } else {
        this.notesList.push({
          title: this.notesText,
          description: 'No Additional content',
          createdDate: new Date(),
          id: this.id++
        });
        this.filteredList = this.notesList;
        this.clickedNote = null;
      }
      this.notesText = '';
    }
  }
  editNotes(note) {
    // Here storing clicked note for edit the selected notes
    this.clickedNote = note;
    this.isReady = false;
    this.notesText = note.title
  }
  deleteNotes(event: any) {
    if (event === true) {
      const index = this.notesList.findIndex(index => this.clickedNote.id === index.id);
      this.notesList.splice(index, 1)
      this.clickedNote = null;
      this.notesText = ''
    }
    if (this.notesList.length <= 0) {
      this.isReady = true;
      this.notesText = ''
    }
  }

  globalSearch(event) {
    // getting the value from child
    this.searchValue = event.target.value;
  }

  // Toggle sidenav
  toggleSideNav(event: boolean) {
    this.isCollapse = !this.isCollapse;
  }
}
