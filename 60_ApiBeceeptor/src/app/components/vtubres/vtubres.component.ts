import { Component } from '@angular/core';
import { VtubersService } from '../../services/vtubers.service';
import { Vtubers } from '../../interface/vtubers';

@Component({
  selector: 'app-vtubres',
  standalone: true,
  imports: [],
  templateUrl: './vtubres.component.html',
  styleUrl: './vtubres.component.css'
})
export class VtubresComponent {

  arreglo: Vtubers[] = [];

  constructor(public vtubersService: VtubersService) { }

  ngOnInit() {
    console.log("iniciar componente");
    this.recuperarData();
  }

  recuperarData(): void {
    console.log("Recuperando Data");

    this.vtubersService.getVtubers().subscribe({
      next: this.successRequest.bind(this),
      error: (error) => {
        console.error(error);
      }
    });
  }

  successRequest(data: any) {
    console.log(data);
    this.arreglo = data.vtubers;
    console.log(this.arreglo);
  }
}
