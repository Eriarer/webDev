import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AbcService {
  constructor(private httpClinet: HttpClient) {}

  consulta(url: string) {
    return this.httpClinet.get(url);
  }

  alta(url: string, body: any) {
    return this.httpClinet.post(url, body).toPromise();
  }
}
