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

import { CdkDetailRowDirective } from './components/product/cdk-detail-row.directive';

import './rxjs-extensions';

import {
  AboutComponent,
  HomeComponent,
  TagsComponent,
  NetworkGraphComponent,
  ProductComponent,
  EnginecardComponent,
  QuestioncardComponent,
  EnginelistComponent,
  ItemcardComponent
} from './components';
import { NavbarComponent } from './components/navbar/navbar.component';

import { CategoryService, TagService, QuestionService, ProductService, EngineService, JobService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    HomeComponent,
    TagsComponent,
    NetworkGraphComponent,
    ProductComponent,
    EnginecardComponent,
    QuestioncardComponent,
    EnginelistComponent,
    ItemcardComponent,
    CdkDetailRowDirective
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
  providers: [CategoryService, TagService, QuestionService, ProductService, EngineService, JobService],
  bootstrap: [AppComponent]
})
export class AppModule {}
