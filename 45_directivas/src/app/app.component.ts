import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '45_directivas';

  nombre: string = "";
  promedio: number = 0;

  estudiantes: Datos[] = [
    { nombre: "Eriarer Martinez Sandoval", promedio: 7 },
    { nombre: "Abraham Melgoza de la Torre", promedio: 9.3 },
    { nombre: "Luis Angel Martinez Sandoval", promedio: 8.5 },
    { nombre: "José Luis Ugalde Montes", promedio: 10 },
    { nombre: "Alexa Ornella Sanchez", promedio: 6.3 }
  ];

  constructor() {
    console.log('Soy el constructor, componente creado');
    console.log(this.estudiantes.map(estudiante => estudiante.nombre));
  }

  ngOnInit() {
    console.log('Soy el ngOnInit, componente cargado');
    document.getElementById('exampleInput1')?.focus();
  }

  agregarDatos(): void {
    let aux: Datos = {
      nombre: this.nombre,
      promedio: this.promedio
    };

    this.estudiantes.push(aux);
    console.log(this.estudiantes);
    this.borrarDatos();
    document.getElementById('exampleInput1')?.focus();
  }

  borrarDatos(): void {
    this.nombre = "";
    this.promedio = 0;
  }

  eliminarRegistro(nombre: string, evento: { type: string }): void {
    let indice = this.estudiantes.findIndex((p) => p.nombre === nombre);
    this.estudiantes.splice(indice, 1);
    alert(`Estudiante ${nombre} eliminado\nEvvento capturado: ${evento.type}`)
  }
}


interface Datos {
  nombre: string;
  promedio: number;
}

