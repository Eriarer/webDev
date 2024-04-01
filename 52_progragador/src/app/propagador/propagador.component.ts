import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propagador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './propagador.component.html',
  styleUrl: './propagador.component.css'
})
export class PropagadorComponent {
  mensaje: string = "";
  @Output() propagar = new EventEmitter<string>();

  onPropagar() {
    this.propagar.emit(this.mensaje);
  }
}
