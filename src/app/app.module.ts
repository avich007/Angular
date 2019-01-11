import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { FormComponent } from './form/form.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { PostComponent } from './post/post.component';
import { HttpModule } from '@angular/http';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    FavouriteComponent,
    PanelComponent,
    FormComponent,
    FormReactiveComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
