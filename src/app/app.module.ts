import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpdataComponent } from './httpdata/httpdata.component';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './data/data.component';
import { DatalocalComponent } from './datalocal/datalocal.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpdataComponent,
    DataComponent,
    DatalocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
