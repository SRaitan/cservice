import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaindisplayComponent } from './maindisplay/maindisplay.component';
import { MetadataDetailsComponent } from './metadata-details/metadata-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MaindisplayComponent,
    MetadataDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
