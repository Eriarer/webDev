import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from '../../models/person.model';
import { PersonsService } from '../../services/persons.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-persons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-persons.component.html',
  styleUrl: './list-persons.component.css'
})
export class ListPersonsComponent {
  _persons!: Observable<PersonModel[]>;

  constructor(private personService: PersonsService) {
    this._persons = this.personService._persons;
  }
}
