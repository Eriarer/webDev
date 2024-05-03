import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '70_Pipe';
  a: number = 0.259; // Asigna el valor 0.259 a la variable 'a'
  // Definición de propiedades
  nombre = 'Juan Carlos'; // Variable de tipo string
  saldo = 1000.50; // Variable de tipo number
  dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']; // Array de strings
  articulos = [{ // Array de objetos
    codigo: 1,
    descripcion: "papas",
    precio: 12.33
  }, {
    codigo: 2,
    descripcion: "manzanas",
    precio: 54
  }];
  fechaActual = new Date(); // Variable de tipo Date que contiene la fecha actual
}
