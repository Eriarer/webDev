import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { usuarios } from '../model/usuarios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '40_binding';

  user1 = new usuarios('Chedy', 'Vt', '4491241244', 'chedy@correo.com', '../assets/images/chedyVt.webp');
  user2 = new usuarios('Blood', 'Dmoon', '4491241244', 'dmoon@correo.com', '../assets/images/bloody-Demon.webp');
  user3 = new usuarios('Iron', 'Mouse', '4491241244', 'ironMouse@correo.com', '../assets/images/IronMouse.webp');
}
