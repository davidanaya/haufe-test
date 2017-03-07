import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      Welcome! <a routerLink="/todos">click</a> for a list of todos!
    </div>
  `
})
export class HomeComponent {}