import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InegiDataService } from './services/inegi-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '58_ApiInegi';
  array: any[] = [];
  toShow: boolean = false;
  constructor(public inegiDataService: InegiDataService) { }

  retriveData(): void {
    this.inegiDataService.getData().subscribe({
      next: this.successRequest.bind(this),
      error: (error) => {
        console.error(error);
        this.toShow = true;
      }
    });
  }

  successRequest(data: any) {
    console.info(data);
    this.array = data.datos;
    console.log(this.array);
    this.toShow = true;
  }
}
