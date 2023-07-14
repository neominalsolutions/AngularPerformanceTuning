import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/asyncPipes/user.service';

@Component({
  standalone: true, // bu şekilde işaretledik.
  selector: 'app-stand-alone',
  templateUrl: './stand-alone.component.html',
  styleUrls: ['./stand-alone.component.scss'],
  providers: [UserService], // standalone componentler kendi başlarına tanımlandıkları için ilgili bağımlıkları providers kısmına tanımlıyoruz.
})
export class StandAloneComponent {
  @Input() from!: string;
}
