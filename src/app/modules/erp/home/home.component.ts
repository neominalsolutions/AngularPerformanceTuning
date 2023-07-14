import { Component, Inject, OnInit } from '@angular/core';
import { ConsoleLogger, ILogger, loggerType } from 'src/app/providers/ILogger';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(@Inject(loggerType) private logger: ILogger) {}

  ngOnInit(): void {
    this.logger.log('erp-home');
  }
}
