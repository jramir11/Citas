import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleAuthorRoutingModule } from './module-author-routing.module';

import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ViewcitasComponent } from './viewcitas/viewcitas.component';
import { NewCitasComponent } from './new-citas/new-citas.component';


@NgModule({
  declarations: [
    NewComponent,
    EditComponent,
    PageNotFoundComponent,
    HomeComponent,
    ViewcitasComponent,
    NewCitasComponent
  ],
  imports: [
    CommonModule
    ModuleAuthorRoutingModule
  ]
})
export class ModuleAuthorModule { }
