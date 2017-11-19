import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule
} from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatSelectModule,
        MatCheckboxModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInputModule,

        MatDialogModule
    ]
})
export class MaterialModule { }
