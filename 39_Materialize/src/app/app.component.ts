import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonesComponent } from './components/botones/botones.component';
import { CardsComponent } from './components/cards/cards.component';
import { ColecionesComponent } from './components/coleciones/coleciones.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { TablaComponent } from './components/tabla/tabla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotonesComponent, CardsComponent,
    ColecionesComponent, FooterComponent, FormularioComponent, HeaderComponent,
    PaginationComponent, PreloaderComponent,
    TablaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
