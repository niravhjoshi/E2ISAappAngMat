import {Routes} from '@angular/router';

import { PersonComponent } from '../person/person.component';
import { PersondetailComponent } from '../persondetail/persondetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'persons', component: PersonComponent},
  {path: 'persondetail', component: PersondetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];
