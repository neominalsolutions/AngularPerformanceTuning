import { Component, OnInit } from '@angular/core';
export const worker = new Worker(new URL('./app.worker', import.meta.url));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  factoriel: number = 0;

  ngOnInit(): void {}

  getData() {
    if (typeof Worker !== 'undefined') {
      worker.postMessage({ num: 50 }); // veriyi gönderdiğimiz yer

      worker.onmessage = (message: any) => {
        console.log('data', message.data);
        console.log(`hesaplanmış değer: ${message.data}`);
        this.factoriel = message.data;
      };
    }

    // let fact = 1;
    // for (let i = 1; i <= 150; i++) {
    //   fact = fact * i;
    // }

    // this.factoriel = fact;
  }

  title = 'AngularPerformanceTuning';
}
