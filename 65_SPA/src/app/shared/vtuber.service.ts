import { Injectable } from '@angular/core';
import { VTUBERS } from '../interfaces/myVtubers';
import { Vtubers } from '../interfaces/vtubers';

@Injectable({
  providedIn: 'root'
})
export class VtuberService {
  private vtubers: Vtubers[] = VTUBERS;
  constructor() { }

  public getVtubers(): Vtubers[] {
    return this.vtubers;
  }

  public getVtuberByIndex(index: number): Vtubers {
    return this.vtubers[index];
  }

  public getVtuberIndexByName(name: string): number {
    return this.vtubers.findIndex(vtuber => vtuber.nombre === name);
  }
}
