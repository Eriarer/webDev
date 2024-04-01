import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() voto: string = '';
  @Input() boton: string = '';
  @Input() id: number = 0;
  @Output() unVoto = new EventEmitter<number>();

  votar(): void {
    this.unVoto.emit(this.id);
  }
}
