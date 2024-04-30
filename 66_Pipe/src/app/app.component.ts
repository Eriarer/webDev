import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeseguroPipe } from './pipeseguro.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipeseguroPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '66_Pipe';
  video: string = '69VV0pH57XE';
}
