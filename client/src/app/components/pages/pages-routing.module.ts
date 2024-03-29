import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
    path: '',  
    component: PagesComponent, 
    children: [
      { path: 'inicio',component: HomeComponent},
      { path: '', redirectTo: 'inicio', pathMatch: 'prefix'}
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
