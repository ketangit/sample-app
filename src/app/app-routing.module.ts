import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent, HomeComponent, TagsComponent } from './components/index';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: 'tags',
    component: TagsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
