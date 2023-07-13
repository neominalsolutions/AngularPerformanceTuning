import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnDestroy, OnInit {
  user$!: Observable<any>;
  userSubscription!: Subscription;
  subs!: Subscription[];

  ngOnInit(): void {
    this.user$ = of([
      { name: 'ali', id: 1 },
      { name: 'can', id: 2 },
    ]);

    this.userSubscription = this.user$.subscribe((res) => {
      console.log('res', res);
    });

    this.subs.push(this.user$.subscribe());
  }

  ngOnDestroy(): void {
    // component domdan çıktığında tetiklenir.
    clearInterval(this.timer);
    this.userSubscription.unsubscribe();

    this.subs.forEach((sb) => {
      sb.unsubscribe();
    });
  }

  val: number = 5;
  ref: any = { name: 'test' };

  timer = setInterval(() => {
    this.val = this.val + 1;
    console.log('val', this.val);
  }, 1000);

  changeValueType() {
    this.val = 10;
  }

  // number:number[] = [];

  changeRefType() {
    // this.ref.name = 'test2';
    // angularda on changes işlemlerinde değişimi yakalamak için spread operatör ile referans güncelleriz
    this.ref = { ...this.ref, name: 'test2' };
    // spread operatör ile nesne referansı güncelleme tekniği

    // this.number = [... this.number, 1]

    // const f:number[] = this.ref.filter((x:any)=> x.name == 'test');
    // this.ref = [... f];
  }
}
