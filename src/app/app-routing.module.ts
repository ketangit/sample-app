import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AboutComponent,
  HomeComponent,
  TagsComponent,
  NetworkGraphComponent,
  ProductComponent,
  QuestioncardComponent
} from './components/index';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'network/:id', component: NetworkGraphComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'question', component: QuestioncardComponent },
  { path: 'product', component: ProductComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
