import { InjectionToken } from '@angular/core';

export interface ILogger {
  log(message: string): void;
}

export const loggerType = new InjectionToken<ILogger>('logger');

export class ConsoleLogger implements ILogger {
  log(message: string): void {
    console.log('console logger', message);
  }
}

export class ApiLogger implements ILogger {
  log(message: string): void {
    console.log('api logger', message);
  }
}
