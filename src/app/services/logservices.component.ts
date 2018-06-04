import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'test-log',
  templateUrl: './logservices.component.html',
  providers: [LogService]
})
export class LogServicesComponent {
  // Injects LogService into logService property  - Depedency Injection
  constructor(private logService: LogService) {
  }

  logMessage(msg: string): void {
    this.logService.log(msg);
  }

  logError(msg: string): void {
    this.logService.logError(msg);
  }

}

