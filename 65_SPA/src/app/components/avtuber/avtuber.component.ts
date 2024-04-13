import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Vtubers } from '../../interfaces/vtubers';
import { VtuberService } from '../../shared/vtuber.service';

@Component({
  selector: 'app-avtuber',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './avtuber.component.html',
  styleUrl: './avtuber.component.css'
})
export class AvtuberComponent {
  @Input() vtuber!: Vtubers;

  constructor(public vtuberService: VtuberService, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.vtuber = this.vtuberService.getVtuberByIndex(params['id']);
      console.log(this.vtuber);
    });
  }
}
