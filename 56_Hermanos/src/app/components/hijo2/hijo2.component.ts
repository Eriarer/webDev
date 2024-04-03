import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  standalone: true,
  imports: [],
  templateUrl: './hijo2.component.html',
  styleUrl: './hijo2.component.css',
  template: `

  `
})
export class Hijo2Component {
  @Input() mensajeHijo1: string | undefined;

  constructor() { }
}
