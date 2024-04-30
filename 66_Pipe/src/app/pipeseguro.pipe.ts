import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'pipeseguro',
  standalone: true
})
export class PipeseguroPipe implements PipeTransform {

  constructor(private domsanitazer: DomSanitizer) { }

  transform(value: unknown, url: string): unknown {
    return this.domsanitazer.bypassSecurityTrustResourceUrl(url + value);
  }

}
