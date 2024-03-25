import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '47_Angular17';
  isLoggedIn: boolean = true; // Variable para @if
  username: string = 'usuario'; // Variable para @if
  items: string[] = ['Item 1', 'Item 2', 'Item 3']; // Variable para @for
  color: string = 'blue'; // Variable para @switch

  constructor() { }
}
