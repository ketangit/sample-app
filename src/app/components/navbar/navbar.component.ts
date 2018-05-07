import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AboutComponent } from '../about/about.component';

import { SECTIONS } from './nav-items';

const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: 'sample-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  aboutDialogRef: MatDialogRef<AboutComponent>;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  showAbout() {
    this.aboutDialogRef = this.dialog.open(AboutComponent, {
      disableClose: false
    });
  }

  get sections() {
    return SECTIONS;
  }

  get sectionKeys() {
    return SECTIONS_KEYS;
  }
}
