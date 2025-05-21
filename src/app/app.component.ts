import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-layout">
      <app-toolbar></app-toolbar>
      <div class="main-content">
        <app-navbar></app-navbar>
        <div class="content-wrapper">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .app-layout {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    .main-content {
      display: flex;
      flex: 1;
    }
    .content-wrapper {
      flex: 1;
      padding: 1rem;
    }
  `]
})
export class AppComponent {}``