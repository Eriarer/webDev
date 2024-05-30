import { Component } from '@angular/core';
import { AbcService } from '../../sercives/abc.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css',
})
export class AltaComponent {
  id?: string;
  name?: string;
  lastname?: string;
  email?: string;
  tel?: string;
  allfields: boolean = false;

  constructor(private abcService: AbcService) {}

  ngDoCheck(): void {
    this.setAllFields();
  }

  setAllFields(): void {
    if (this.id && this.name && this.lastname && this.email && this.tel) {
      this.allfields = true;
    } else {
      this.allfields = false;
    }
  }

  insertar(): void {
    let body = {
      idUser: this.id,
      name: this.name,
      lastname: this.lastname,
      contact: this.email,
      cellphone: this.tel,
    };
    this.abcService
      .alta('http://localhost:3000/user', body)
      .then((res: any) => {
        console.log('Success', res);
        if (!res.success) {
          alert(
            'Error en la operación.\nError: ' +
              JSON.parse(res.err).code +
              '\nErrorNo.: ' +
              JSON.parse(res.err).errno +
              '\nMessage: ' +
              JSON.parse(res.err).sqlMessage
          );
          return;
        }
        alert(
          `Operation was a succes, the user was inserted.\nID: ${this.id}\nName: ${this.name}\nLastname: ${this.lastname}\nEmail: ${this.email}\nPhone number: ${this.tel}`
        );
        this.limpiar();
      })
      .catch((err) => {
        console.log('Error', err);
        alert('Error en la operación.\nError: ' + err.code);
      });
  }

  limpiar(): void {
    this.id = '';
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.tel = '';
  }
}
