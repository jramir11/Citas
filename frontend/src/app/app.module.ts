import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsService } from './services/authors.service';
import { HomeComponent } from './module-author/home/home.component';
import { NewComponent } from './module-author/new/new.component';
import { EditComponent } from './module-author/edit/edit.component';
import { ViewcitasComponent } from './module-author/viewcitas/viewcitas.component';
import { NewCitasComponent } from './module-author/new-citas/new-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    EditComponent,
    ViewcitasComponent,
    NewCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ AuthorsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
