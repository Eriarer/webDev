import { Component } from '@angular/core';
import { PersonsService } from '../../services/persons.service';
import { PersonModel } from '../../models/person.model';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-persons',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-persons.component.html',
  styleUrl: './form-persons.component.css'
})
export class FormPersonsComponent {
  sub_person!: Subscription;

  editMode: boolean = false;

  uid: string = '';
  name: string = '';
  lastname: string = '';
  contact: string = '';

  constructor(private personService: PersonsService) { }

  ngOnInit(): void {
    this.fnSubscribeToPerson();
  }

  ngOnDestroy(): void {
    if (this.sub_person) {
      this.sub_person.unsubscribe();
    }
  }

  fnSubscribeToPerson() {
    this.sub_person = this.personService._person.subscribe(person => {
      if (person) {
        this.fnLoadPerson(person);
      } else {
        this.editMode = false;
        this.fnCleanForm();
      }
    });
  }
  fnValidData(): boolean {
    if (this.name === '' || this.lastname === '' || this.contact === '') {
      return false;
    }
    return true;
  }

  fnCleanForm() {
    this.uid = this.name = this.lastname = this.contact = '';
  }

  fnSave(): void {
    if (!this.fnValidData()) {
      return;
    }
    let person: PersonModel = {
      _name: this.name,
      _lastname: this.lastname,
      _contact: this.contact
    } as PersonModel;
    if (this.editMode) {
      person._uid = this.uid;
      this.personService.fnEditPerson(person);
    } else {
      this.personService.fnAddPerson(person);
      this.fnCleanForm();
    }
  }

  fnLoadPerson(person: PersonModel): void {
    this.editMode = true;
    this.uid = person._uid;
    this.name = person._name;
    this.lastname = person._lastname;
    this.contact = person._contact;
  }
}
