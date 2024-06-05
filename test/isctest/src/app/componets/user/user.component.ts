import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../services/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  _users: any[] = [];

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10}$/),
    ]),
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      console.log('Usuarios:', users);
      this._users = users;
    });
  }

  async onSubmit() {
    if (this.userForm.valid) {
      console.log('Formulario válido:', this.userForm.value);
      const user: User = {
        name: this.userForm.value.name || '',
        email: this.userForm.value.email || '',
        number: this.userForm.value.phone || '',
        admin: false,
      };
      if (user.email === '' || user.name === '' || user.number === '') {
        return;
      }
      const response = await this.userService.addUser(user);
      console.log('Usuario agregado:', response);
    } else {
      console.log('Formulario inválido');
    }
    this.userForm.reset();
  }

  async deleteUser(id: string) {
    const response = await this.userService.deleteUser(id);
    console.log('Usuario eliminado:', response);
  }
}
