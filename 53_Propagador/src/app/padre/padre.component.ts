import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  title: string = "Vota por tu color favorito";
  votacion: string = "";
  c1: number = 0;
  c2: number = 0;
  c3: number = 0;
  c4: number = 0;
  totalVotos: number = 0;

  votos = [
    { title: "Rojo", boton: "btn-danger", id: 1 },
    { title: "Azul", boton: "btn-primary", id: 2 },
    { title: "Verde", boton: "btn-success", id: 3 },
    { title: "Amarillo", boton: "btn-warning", id: 4 }
  ];

  finalizar(): void {
    this.totalVotos = this.c1 + this.c2 + this.c3 + this.c4;
  }

  addVoto(response: number) {
    switch (response) {
      case 1:
        this.c1++;
        break;
      case 2:
        this.c2++;
        break;
      case 3:
        this.c3++;
        break;
      case 4:
        this.c4++;
        break;
    }
  }
}
