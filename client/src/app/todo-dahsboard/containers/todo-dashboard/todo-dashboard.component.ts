import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { TodoDashboardService } from '../../todo-dashboard.service';

import { Todo } from '../../models/todo.interface';

@Component({
  selector: 'todo-dashboard',
  styleUrls: ['todo-dashboard.component.scss'],
  template: `
    <div class="todo-dashboard">
      <ul class="todo-list">
        <li *ngFor="let todo of todos;">
          <a routerLink="/todos/{{todo.id}}">{{ todo.id }}</a>
        </li>
      </ul>
      <todo-viewer *ngIf="todo" [detail]="todo"></todo-viewer>
    </div>
  `
})
export class TodoDashboardComponent implements OnInit {
  
  todos: Todo[];
  todo: Todo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoService: TodoDashboardService) {}

  ngOnInit() {
    this.todoService
      .getTodos()
      .subscribe((data: Todo[]) => this.todos = data);

    this.route.params
      .switchMap((data: Todo) => !!data.id ? this.todoService.getTodo(data.id) : Observable.empty<Todo>())
      .subscribe((data: Todo) => this.todo = data);
  }
}