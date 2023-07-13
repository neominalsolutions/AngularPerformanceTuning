import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NetworkAwarePreloadingStrategyService
  implements PreloadingStrategy
{
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const connection = (navigator as any).connection;

    console.log('connection', connection);

    if (connection.saveData) {
      return of(null);
    }
    const speed = connection.effectiveType;
    const slowConnections = ['slow-2g', '2g'];
    if (slowConnections.includes(speed)) {
      return of(null); // preload özelliğini aktif etme. internet yavaş ise önden yükleme yapmıyoruz.
    }
    return fn(); // internet sağlıklıysa yükle. preload özelliğ aktif.
  }
}
