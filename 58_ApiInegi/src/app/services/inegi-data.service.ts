import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InegiDataService {

  constructor(private http: HttpClient) { }

  /**
   * Utiliza http.get.pipe(take(1)) para obtener los datos de la API de INEGI.
   * el pipe(take(1)) se utiliza para que el observable se complete después de la primera emisión.
   */
  getData() {
    return this.http.get("https://gaia.inegi.org.mx/wscatgeo/mgee/").pipe(take(1));
  }
}
