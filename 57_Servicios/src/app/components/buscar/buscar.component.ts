import { Component, Input, SimpleChanges } from '@angular/core';
import { VtubersService, vtubers } from '../../services/shared/vtubers.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  data: vtubers = {} as vtubers;
  vtubers: vtubers[] = [];
  index = -1;
  mensaje: String = "";
  @Input() tosearch: String = ""

  constructor(public servicio: VtubersService) {
    this.vtubers = this.servicio.getVtubers();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Verifica si la variable `search` ha cambiado
    if (changes['tosearch'].currentValue !== changes['tosearch'].previousValue) {
      this.ver(this.tosearch);
    }
  }

  ver(aux: String) {
    if (aux === "") {
      return;
    }
    console.log("Ver " + aux);
    this.index = this.vtubers.findIndex(p => p.nombre === aux);
    console.log("Index: " + this.index);

    if (this.index !== -1) {
      this.data = this.vtubers[this.index];
      console.log(this.data);
    } else {
      this.mensaje = "No se encontró el Vtuber";
      console.log(this.mensaje);
      setTimeout(() => {
        this.mensaje = "";
      }, 2000);
    }
  }


}
