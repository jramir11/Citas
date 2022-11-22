import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './module-author/edit/edit.component';
import { HomeComponent } from './module-author/home/home.component';
import { NewCitasComponent } from './module-author/new-citas/new-citas.component';

import { NewComponent } from './module-author/new/new.component';
import { PageNotFoundComponent } from './module-author/page-not-found/page-not-found.component';
import { ViewcitasComponent } from './module-author/viewcitas/viewcitas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'newautor', component: NewComponent },
  { path: 'editautor/:id', component: EditComponent },
  { path: 'viewcitas/:id', component: ViewcitasComponent },
  { path: 'newcitas/:id', component: NewCitasComponent},
  
  //En este orden deben agregarse estas rutas
  // redirige adirectorio web Raiz si no hay nada en la URL
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // los ** atrapará todo lo que no coincidió con ninguno de las rutas anteriores
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
