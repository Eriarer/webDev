import { Component } from '@angular/core';
import { AvtuberComponent } from '../avtuber/avtuber.component';
import { Vtubers } from '../../interfaces/vtubers';
import { VtuberService } from '../../shared/vtuber.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AvtuberComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  nombre: string = '';
  indice: number = 0;
  myVtuber: Vtubers = {
    nombre: '',
    img: '',
    generacion: '',
    genName: '',
    perfil: '',
    debut: '',
  }

  constructor(private vtuberService: VtuberService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.nombre = params['nombre'];
      this.indice = this.vtuberService.getVtuberIndexByName(this.nombre);
      console.log(this.indice);
      if (this.indice === -1) { return; }
      this.myVtuber = this.vtuberService.getVtuberByIndex(this.indice);
    });
  }
}
