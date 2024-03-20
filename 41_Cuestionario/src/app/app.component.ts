import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre: string;
  resultado: number = 0;
  constructor() {
    this.nombre = 'Abraham Melgoza de la Torre';
  }
  cambiarNombre() {
    this.nombre = this.nombre.split('').reverse().join('');
  }
}
