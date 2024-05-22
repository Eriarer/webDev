import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CalculosService } from './services/calculos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular';

  lado?: number;
  area?: number;
  perimetro?: number;

  constructor(private calculosService: CalculosService) {}

  enviar(): void {
    const apiUrl = `http://localhost:8080/calculos/${this.lado}`;
    console.log(apiUrl);
    this.calculosService.getJSON(apiUrl).subscribe((res: any) => {
      let data = res.data;
      console.log(data);
      this.area = data.area;
      this.perimetro = data.perimetro;
    });
  }
}
