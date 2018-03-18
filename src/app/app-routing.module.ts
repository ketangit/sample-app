import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AboutComponent,
  HomeComponent,
  TagsComponent,
  NetworkGraphComponent,
  ProductComponent
} from './components/index';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'network',
    component: NetworkGraphComponent
  },
  {
    path: 'tags',
    component: TagsComponent
  },
  {
    path: 'product',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
