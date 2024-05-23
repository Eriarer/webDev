import { Component } from '@angular/core';
import { TrabajadorService } from './services/trabajador.service';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nombre?: string;
  horas?: number;
  pago?: number;
  categoria?: string;
  respuesta?: any;

  constructor(private trabajadorService: TrabajadorService) {}

  enviar(): void {
    const body = {
      nombre: this.nombre,
      horas: this.horas,
      pago: this.pago,
      categoria: this.categoria,
    };
    this.trabajadorService.calcularSueldo(body).subscribe(
      (res) => {
        this.respuesta = res;
        console.log(res);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
