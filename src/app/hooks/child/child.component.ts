import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// export interface Config {
//   name: string;
// }

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnChanges {
  // @Input() refTypes:any | undefined;
  @Input() refTypes!: any; // name
  @Input() valueTypes!: number; // value Types

  // inputların değişimini takip etmemizi sağlayan method
  ngOnChanges(changes: SimpleChanges): void {
    console.log('c', changes);

    // if (changes['refTypes'].firstChange) {
    //   // kod blogu çalıştır
    //   alert('isim değişti');
    // }

    if (changes['refTypes']?.currentValue?.name === 'test2') {
      // alert('isim değişti');
    }
  }
}
