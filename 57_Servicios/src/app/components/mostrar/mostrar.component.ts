import { Component, EventEmitter, Output } from '@angular/core';
import { VtubersService, vtubers } from '../../services/shared/vtubers.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.css'
})
export class MostrarComponent {
  vtubers: vtubers[] = [];
  @Output() search = new EventEmitter<String>();

  constructor(public servicio: VtubersService) {
    this.vtubers = this.servicio.getVtubers();
  }

  busqueda(aux: String) {
    console.log("Ver " + aux);
    this.search.emit(aux);
  }
}
