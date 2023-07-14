import { Component, Inject, OnInit } from '@angular/core';
import {
  ApiLogger,
  ConsoleLogger,
  ILogger,
  loggerType,
} from 'src/app/providers/ILogger';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    // ovveride ettik
    {
      provide: loggerType,
      useClass: ConsoleLogger,
    },
  ],
})
export class HomeComponent implements OnInit {
  constructor(
    @Inject(loggerType) private logger: ILogger,
    @Inject('apiKey') private key: string
  ) {}

  ngOnInit(): void {
    this.logger.log('crm-home');
    console.log(this.key);
  }
}
