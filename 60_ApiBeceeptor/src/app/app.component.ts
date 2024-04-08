import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VtubresComponent } from './components/vtubres/vtubres.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VtubresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '60_ApiBeceeptor';
}
