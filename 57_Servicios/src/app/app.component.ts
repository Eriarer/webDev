import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuscarComponent, MostrarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '57_Servicios';
  search: String = "";
  tosearch(aux: String) {
    this.search = aux;
  }
}
