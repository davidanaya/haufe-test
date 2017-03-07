import { Component, Input } from '@angular/core';

import { Todo } from '../../models/todo.interface';

@Component({
  selector: 'todo-viewer',
  styleUrls: ['todo-viewer.component.scss'],
  template: `
    <div class="todo-viewer">
      <h2>{{ detail.id }}</h2>
      <p>{{ detail.title }}</p>
    </div>
  `
})
export class TodoViewerComponent {
  
  @Input()
  detail: Todo;

  constructor() {}
}