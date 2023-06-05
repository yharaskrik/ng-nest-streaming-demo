import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'ng-nest-streaming-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';

  constructor() {
    inject(HttpClient)
      .get(`http://localhost:3000/api`, {
        observe: 'body',
        responseType: 'text',
        reportProgress: true,
      })
      .subscribe(console.log);
  }
}
