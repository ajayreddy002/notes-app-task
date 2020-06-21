import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() notesText: string
  @Output() isDisabled:any =  new EventEmitter();
  @Output() saveNotes:any = new EventEmitter();
  @Output() deleteNotes:any = new EventEmitter();
  @Output() search:any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    // Getting enetered text from parent
    if (changes['notesText']) {
      if (this.notesText !== undefined && this.notesText !== '') {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    }
  }
  
  addNotes() {
    this.saveNotes.emit(true)
  }
  deleteNote() {
    this.deleteNotes.emit(true)
  }
  getSearchValue(e) {
    this.search.emit(event)
  }
}
