import { Component } from '@angular/core';
import { AbcService } from '../../sercives/abc.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css',
})
export class ConsultaComponent {
  array: any[] = [];
  error?: string;
  constructor(private abcService: AbcService) {
    this.abcService
      .consulta('http://localhost:3000/user')
      .subscribe((res: any) => {
        if (!res.success) {
          this.error = JSON.parse(res.err).code;
        }
        console.log('Consulta genreal ...');
        console.log(res);
        this.array = res.array;
      });
  }
}
