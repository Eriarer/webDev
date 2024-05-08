import { Component } from '@angular/core';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-form-persons',
  standalone: true,
  imports: [],
  templateUrl: './form-persons.component.html',
  styleUrl: './form-persons.component.css'
})
export class FormPersonsComponent {
  editMode: boolean = false;

  uid: string = '';
  name: string = '';
  lastname: string = '';
  contact: string = '';

  constructor(private personServce: PersonsService) { }
}
