import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from './components/dado/dado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '51_Parent_Child';
  // parametros de configuración en segundos
  minDuration = 1;
  ranDuration = 0.5;
  minDelay = 0;
  ranDelay = 0.5;
  maxAnimation = (this.minDuration + this.ranDuration + this.minDelay + this.ranDelay) * 1000;

  buttonDisabled = false;

  dice1: number;
  dice2: number;
  dice3: number;

  message: string;
  result: string;

  constructor() {
    this.dice1 = 1;
    this.dice2 = 1;
    this.dice3 = 1;

    this.message = "";
    this.result = "";
  }


  throwDSix(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  trowDices(): void {
    this.dice1 = this.throwDSix();
    this.dice2 = this.throwDSix();
    this.dice3 = this.throwDSix();
  }



  animateDices(): void {
    // agregar la animacion diceThrow 2s linear;
    let dices = document.querySelectorAll(".dice");
    dices.forEach((dice) => {
      dice.classList.add("roling");
      const duration = Math.random() * this.ranDuration + this.minDuration;
      const delay = Math.random() * this.ranDelay + this.minDelay;
      const animationDuration = (duration + delay) * 1000;
      dice.setAttribute("style", `animation-duration: ${duration}s; animation-delay: ${delay}s; animation-timing-function: linear; animation-fill-mode: "forwars"; `);
      setTimeout(() => {
        dice.classList.remove("roling");
      }, animationDuration);
    });
    // randomizar el resultado de los dados de 40 a 75 veces durante la dura de la animacion
    const randomize = Math.floor(Math.random() * 35) + 40;
    const timeInterval = this.maxAnimation / randomize;
    for (let i = 0; i < randomize; i++) {
      setTimeout(() => {
        this.trowDices();
      }, i * timeInterval);
    }
  }

  gamble(): void {
    this.buttonDisabled = true;
    this.animateDices();
    setTimeout(() => {
      this.trowDices();
      if (this.dice1 === this.dice2 && this.dice2 === this.dice3) {
        this.message = "Ganaste";
        this.result = "win";
      } else {
        this.message = "Perdiste";
        this.result = "lose";
      }
      this.buttonDisabled = false;
    }, this.maxAnimation);
  }
}
