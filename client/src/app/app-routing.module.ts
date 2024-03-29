import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PagesComponent } from './components/pages/pages.component';
import { DepositoComponent } from './components/pages/deposito/deposito.component';
import { AdmComponent } from './components/adm/adm.component';


const routes: Routes = [
  { path: 'admin',component: AdmComponent},
  { path: 'depositar',component: DepositoComponent},
  {path: '', component: PagesComponent}, 
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
