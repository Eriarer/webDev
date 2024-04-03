import { Component } from '@angular/core';
import { Hijo1Component } from '../hijo1/hijo1.component';
import { Hijo2Component } from '../hijo2/hijo2.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [Hijo1Component, Hijo2Component],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent {
  enviarHijo2: string = '';

  mensajeParaHijo2(mensaje: string){
    this.enviarHijo2 = mensaje;
  }

  constructor() { }
}
