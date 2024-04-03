import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  standalone: true,
  imports: [],
  templateUrl: './hijo1.component.html',
  styleUrl: './hijo1.component.css',
})
export class Hijo1Component {
  @Output() mensajeDesdeHijo1 = new EventEmitter<string>();

  enviarMensaje(mensaje: string){
    this.mensajeDesdeHijo1.emit(mensaje);
  }

  constructor() { }
}
