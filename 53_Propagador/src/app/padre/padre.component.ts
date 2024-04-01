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
  votacion: string = "Esperando votos...<br>Porfavor, selecciona un color.<br>Gracias!";
  c1: number = 0;
  c2: number = 0;
  c3: number = 0;
  c4: number = 0;
  totalVotos: number = 0;
  finalizado: boolean = false;

  votos = [
    { title: "Rojo", boton: "btn-danger", id: 1 },
    { title: "Azul", boton: "btn-primary", id: 2 },
    { title: "Verde", boton: "btn-success", id: 3 },
    { title: "Amarillo", boton: "btn-warning", id: 4 }
  ];

  addVoto(response: number) {
    this.votacion = "Gracias por decirnos<br>que tu color favorito es el<br>"
    switch (response) {
      case 1:
        this.c1++;
        this.votacion += "<span class='text-danger'>rojo!</span>";
        break;
      case 2:
        this.c2++;
        this.votacion += "<span class='text-primary'>azul!</span>";
        break;
      case 3:
        this.c3++;
        this.votacion += "<span class='text-success'>verde!</span>";
        break;
      case 4:
        this.c4++;
        this.votacion += "<span class='text-warning'>amarillo!</span>";
        break;
    }
    this.totalVotos++;
  }
}
