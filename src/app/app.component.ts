import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { interval, Observable, Subscription } from 'rxjs';
import { AddNoteComponent } from './add-note/add-note.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testTV';
  public data$: Observable<any>;
  subscription: Subscription;
  public opened = false;
  latitude: number;
  longitude: number;
  public form: FormGroup;


  constructor(private _service: AppService, private dialogService: DialogService
  ) { }
  ngOnInit(): void {
    this.subscription = interval(2000).subscribe(val => { if (!this.opened) this.data$ = this._service.loadData() });
  }

  public showDialog(longitude, latitude) {
    this.opened = true;
    const dialog: DialogRef = this.dialogService.open({
      title: "Add Note",
      content: AddNoteComponent
    });

    dialog.result.subscribe((result) => {
      this.opened = false;
      if (!(result instanceof DialogCloseResult)) {
        this._service.addNote(result,longitude,latitude);
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
