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
  title = '44_directivas';
  datos: personas[] = [
    { id: 1, nombre: 'Eri', apellido: 'Melgoza', sexo: 'F' },
    { id: 2, nombre: 'Abraham', apellido: 'Melgoza', sexo: 'M' },
    { id: 3, nombre: 'Luis', apellido: 'Nijares', sexo: 'M' },
    { id: 4, nombre: 'Cecilia', apellido: 'Himelda', sexo: 'F' }
  ];
}

interface personas {
  id: number;
  nombre: string;
  apellido: string;
  sexo: string;
}