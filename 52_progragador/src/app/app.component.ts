import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropagadorComponent } from './propagador/propagador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PropagadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '52_progragador';
  msg: string = "";

  procesaProgapar(mensaje: string) {
    this.msg = mensaje;
    console.log("Recibido: " + mensaje);
  }
}
