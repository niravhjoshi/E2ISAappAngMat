import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../shared/person.model';

@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.component.html',
  styleUrls: ['./persondetail.component.scss']
})
export class PersondetailComponent implements OnInit {

  @Input()
  person: Person;


  constructor() { }

  ngOnInit() {

  }

}
