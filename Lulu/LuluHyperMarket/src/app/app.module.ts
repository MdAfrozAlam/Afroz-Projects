import { lazyRoutes } from './app.routes';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CountriesService } from './countries.service';
import { PageoneComponent } from './pageone/pageone.component';

@NgModule({
  declarations: [
    AppComponent,
    
    PageoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    lazyRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
