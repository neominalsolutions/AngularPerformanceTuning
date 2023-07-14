import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-cdchild',
  templateUrl: './cdchild.component.html',
  styleUrls: ['./cdchild.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // Pure Component
})
export class CDChildComponent implements OnInit {
  @Input() counter: number = 0;

  constructor(private cr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('child-init');
  }

  render() {
    console.log('child render');
  }

  manuelChangeDetection() {
    this.cr.detectChanges();
  }
}
