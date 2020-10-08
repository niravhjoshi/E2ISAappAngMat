import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule, MatGridListModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';

import 'hammerjs';
import { PersonComponent } from './person/person.component';
import { PersondetailComponent } from './persondetail/persondetail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersondetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
