import { Component } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
@Component({
  selector: 'sample-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private observableMedia: ObservableMedia) {}
}
