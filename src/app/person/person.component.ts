import { Component, OnInit } from '@angular/core';
import {Person} from '../../shared/person.model';
import {PERSONS} from '../../shared/person.data';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  persons: Person[] = PERSONS;
  selectedPerson: Person;

  constructor() { }

  ngOnInit() {
  }
  onSelect(person: Person) {
  this.selectedPerson = person;
  }
}
