import { Injectable } from '@angular/core';
import { VTUBERS } from '../interfaces/myVtubers';
import { Vtubers } from '../interfaces/vtubers';

@Injectable({
  providedIn: 'root'
})
export class VtuberService {
  private vtubers: Vtubers[] = VTUBERS;
  constructor() { }
}
