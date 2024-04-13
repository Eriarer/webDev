import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects.split('/')[1];
        this.updateActive(currentRoute);
      }
    });
  }

  updateActive(route: string) {
    this.homeActive = this.vtubersActive = this.aboutActive = false;
    switch (route) {
      case 'home':
        this.homeActive = true;
        break;
      case 'vtubers':
        this.vtubersActive = true;
        break;
      case 'about':
        this.aboutActive = true;
        break;
    }
  }
}
