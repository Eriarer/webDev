
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  @Input() value: number = 0;

  createRange(length: number): Array<any> {
    return Array.from({ length });
  }
}