import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
  // providers:[UserService]
})
export class AsyncComponent implements OnInit {
  constructor(private userS: UserService) {}

  // İçinde Input Output olmaz sadece routing ile çağırılır
  // selector kısmını barındırmaz
  // başka bir componentin html tarafından çağırılmaz
  users$!: Observable<any>;
  // async pipe html üzerinden hem subsribe hemde component domdan kalkınca otomatik unsubscribe yapar.
  ngOnInit(): void {
    // servis çağırısı yapalım.
    this.users$ = this.userS.getUsers().pipe(
      tap((data) => {
        console.log('ilk-data', data);
      }),
      map((data: any) => {
        return data.filter((x: any) => x.name.includes('a'));
      })
    );
  }

  trackByFn(index: number, data: any) {
    console.log('index', index, 'data', data.id);
    return data.id; // unique olarak seçilmesi gerekiyor.
  }

  urlFormatter(website: string) {
    console.log('website', website);
    return `https://${website}`;
  }
}
