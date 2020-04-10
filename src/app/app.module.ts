import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule, routeComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import { FullviewComponent } from './fullview/fullview.component'



@NgModule({
  declarations: [
    AppComponent,
    routeComponent,
    FullviewComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAat6JOFdIXowfycCVKwygR7NX-_sOsPWw',
      libraries:['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
