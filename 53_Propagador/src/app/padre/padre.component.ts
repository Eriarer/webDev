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
  ganador: string = "";

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

  finalizar(): void {
    this.votacion = "";
    this.ganador = "El color favorito de la gente es: <span class='badge rounded-pill text-bg-";
    if (this.c1 > this.c2 && this.c1 > this.c3 && this.c1 > this.c4) {
      this.ganador += "danger'>Rojo</span>";
    } else if (this.c2 > this.c1 && this.c2 > this.c3 && this.c2 > this.c4) {
      this.ganador += "primary'>Azul</span>";
    } else if (this.c3 > this.c1 && this.c3 > this.c2 && this.c3 > this.c4) {
      this.ganador += "success'>Verde</span>";
    } else if (this.c4 > this.c1 && this.c4 > this.c2 && this.c4 > this.c3) {
      this.ganador += "warning'>Amarillo</span>";
    } else {
      this.ganador += "secondary'>Empate!</span> entre";
      let max = Math.max(this.c1, this.c2, this.c3, this.c4);
      if (this.c1 == max) {
        this.ganador += "<br><span class='text-danger'>Rojo</span>";
      }
      if (this.c2 == max) {
        this.ganador += "<br><span class='text-primary'>Azul</span>";
      }
      if (this.c3 == max) {
        this.ganador += "<br><span class='text-success'>Verde</span>";
      }
      if (this.c4 == max) {
        this.ganador += "<br><span class='text-warning'>Amarillo</span>";
      }
    }
    this.finalizado = true;
  }
}
