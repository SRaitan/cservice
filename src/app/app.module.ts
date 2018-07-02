import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MetadataDetailsComponent }  from './metadata-details/metadata-details.component';
import { AppComponent } from './app.component';
import { MaindisplayComponent } from './maindisplay/maindisplay.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MaindisplayComponent,
    MetadataDetailsComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
