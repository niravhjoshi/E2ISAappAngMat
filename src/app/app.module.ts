import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatGridListModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';


import 'hammerjs';
import { PersonComponent } from './person/person.component';
import { PersondetailComponent } from './persondetail/persondetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


// Services Component
import {PersonService} from './services/person.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersondetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
