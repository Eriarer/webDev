import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  homeActive: boolean = true;
  vtubersActive: boolean = false;
  aboutActive: boolean = false;

  constructor() { }

  ngOnInit() {
    this.switchActive(0);
  }

  switchActive(active: number) {
    this.homeActive = this.vtubersActive = this.aboutActive = false;
    switch (active) {
      case 0:
        this.homeActive = true;
        break;
      case 1:
        this.vtubersActive = true;
        break;
      case 2:
        this.aboutActive = true;
        break;
    }
  }
}
