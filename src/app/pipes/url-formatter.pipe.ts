import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlFormatter',
})
export class UrlFormatterPipe implements PipeTransform {
  transform(url: string, protokol: string): string {
    if (protokol == 'http') return `http://${url}`;
    else if (protokol == 'http') return `https://${url}`;

    return url;
  }
}
