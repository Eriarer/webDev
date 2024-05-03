import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CapitalizadoPipe } from './capitalizado.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CapitalizadoPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '69_Pipe';
  clientes: string[] = [
    'MarIaNA aViLA RIveRA',
    'GerARDo DiOSdado ESCALERa',
    'LeoANARDO GuTIeRRez FloRes',
    'AbRAhaM MeLGOzA dE la TorRe'
  ]
}
