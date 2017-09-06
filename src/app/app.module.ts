import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { SelectionComponent } from './selection.component';
import { searchitem } from './searchItem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    SelectionComponent,
    searchitem

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
