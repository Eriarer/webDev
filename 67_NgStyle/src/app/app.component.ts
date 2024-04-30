import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '67_NgStyle';
  colorEstado = 'red';
  size = 30;
  bgColor = 'pink';
  tamano = 30;
  retornarColor() {
    return 'pink';
  }

  presentacion = {
    'background-color': 'pink',
    color: 'red',
    'width.px': 1000,
    'height.px': 200,
    'font-size.px': this.size,
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center'
  };
  agrandar() {
    this.size += 5;
    this.presentacion['font-size.px'] = this.size;
  }
  achicar() {
    if (this.size <= 5) {
      return;
    }
    this.size -= 5;
    this.presentacion['font-size.px'] = this.size;
  }

  aumentar() {
    this.tamano += 5;
  }

  reducir() {
    if (this.tamano <= 5) {
      return;
    }
    this.tamano -= 5;
  }
}

