import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeowComponent } from './meow/meow.component';
import { RandomcatComponent } from './randomcat/randomcat.component';
import { SearchbybreedComponent } from './searchbybreed/searchbybreed.component';
import { PierreFeuilleCiseauxComponent } from './pierre-feuille-ciseaux/pierre-feuille-ciseaux.component';

const routes: Routes = [
  { path:'randomcat', component: RandomcatComponent },
  { path:'searchbybreed', component: SearchbybreedComponent },
  { path:'meowmeow', component: MeowComponent },
  { path:'pierrefeuilleciseaux', component: PierreFeuilleCiseauxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RandomcatComponent]