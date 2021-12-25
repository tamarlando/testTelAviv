import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {


  constructor(public dialog: DialogRef) {}
  public note: string;
  public Save() {
    this.dialog.close(this.note); 
  }
}
