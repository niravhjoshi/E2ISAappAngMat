import { Component, OnInit } from '@angular/core';
import {Person} from '../../shared/person.model';

import {PersonService} from '../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  persons: Person[];
  selectedPerson: Person;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.persons = this.personService.getPersons();
  }
  onSelect(person: Person) {
  this.selectedPerson = person;
  }
}
