import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-angular-content',
  templateUrl: './angular-content.component.html',
  styleUrls: ['./angular-content.component.scss'],
})
export class AngularContentComponent implements AfterContentInit {
  @ContentChild('content') content!: ElementRef;

  ngAfterContentInit(): void {
    console.log('content', this.content);
  }
}
