import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './modules/material.module';
import './rxjs-extensions';

import {
  AboutComponent,
  HomeComponent,
  TagsComponent,
  NetworkGraphComponent
} from './components';
import { CategoryService, TagService, QuestionService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TagsComponent,
    NetworkGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MaterialModule
  ],
  providers: [CategoryService, TagService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
