import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-templates',
  templateUrl: './angular-templates.component.html',
  styleUrls: ['./angular-templates.component.scss'],
})
export class AngularTemplatesComponent {
  visible: boolean = false;
  names = ['ali','ayşe','deniz']
}
