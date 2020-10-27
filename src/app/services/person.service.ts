import { Injectable } from '@angular/core';
import {Person} from '../../shared/person.model';
import {PERSONS} from '../../shared/person.data';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPersons(): Person[] {
    return PERSONS;
  }
}
