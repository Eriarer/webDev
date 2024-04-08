import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VtubersService {

  urlAPI: string = 'https://vtubersemdt.free.beeceptor.com/vtubers';

  constructor(private http: HttpClient) { }

  // Retorna un vector de la interface Vtubers
  // El llamado del HTTP se retorna en json
  getVtubers() {
    return this.http.get(this.urlAPI).pipe(take(1));
  }
}
