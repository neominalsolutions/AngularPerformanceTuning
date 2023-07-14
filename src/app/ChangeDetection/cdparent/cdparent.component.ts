import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CDChildComponent } from '../cdchild/cdchild.component';

@Component({
  selector: 'app-cdparent',
  templateUrl: './cdparent.component.html',
  styleUrls: ['./cdparent.component.scss'],
})
export class CDParentComponent implements AfterViewInit, OnInit {
  counter: number = 0;

  @ViewChild('cdChild') cdChild!: CDChildComponent;

  onClick() {
    console.log('click');
    this.cdChild.manuelChangeDetection();
  }

  ngAfterViewInit(): void {
    console.log('after view init');
  }

  ngOnInit(): void {
    console.log('ng init');
  }
}
