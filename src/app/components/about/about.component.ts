import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'sample-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AboutComponent>) {}

  ngOnInit() {}
}
