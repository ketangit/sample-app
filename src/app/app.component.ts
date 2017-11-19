import { Component } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AboutComponent } from './components/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  aboutDialogRef: MatDialogRef<AboutComponent>;

  constructor(private observableMedia: ObservableMedia, private dialog: MatDialog) { }

  showAbout() {
    this.aboutDialogRef = this.dialog.open(AboutComponent, { disableClose: false });
  }
}
