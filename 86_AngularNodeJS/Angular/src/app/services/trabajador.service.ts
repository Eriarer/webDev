import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrabajadorService {
  private apiUrl = 'http://localhost:8080/trabajador'; // Aquí debes colocar la URL correcta de tu API

  constructor(private http: HttpClient) {}

  calcularSueldo(body: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, body);
  }
}
