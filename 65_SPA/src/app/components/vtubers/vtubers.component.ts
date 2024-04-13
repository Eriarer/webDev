import { Component } from '@angular/core';
import { Vtubers } from '../../interfaces/vtubers';
import { VtuberService } from '../../shared/vtuber.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vtubers',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './vtubers.component.html',
  styleUrl: './vtubers.component.css'
})
export class VtubersComponent {
  myvtures: Vtubers[] = [];

  constructor(public vtuberService: VtuberService) {
    console.log('VtubersComponent constructor');
  }

  ngOnInit(): void {
    console.log('VtubersComponent ngOnInit');
    this.myvtures = this.vtuberService.getVtubers();
    console.log(this.myvtures);
  }
}

