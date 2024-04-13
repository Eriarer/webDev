import { Component } from '@angular/core';
import { Vtubers } from '../../interfaces/vtubers';
import { VTUBERS } from '../../interfaces/myVtubers';
import { VtuberService } from '../../shared/vtuber.service';

@Component({
  selector: 'app-vtubers',
  standalone: true,
  imports: [],
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

