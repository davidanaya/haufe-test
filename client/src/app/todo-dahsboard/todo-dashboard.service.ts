import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Todo } from './models/todo.interface';

const TODO_API: string = 'http://localhost:3050/api/todos';

@Injectable()
export class TodoDashboardService {

  constructor(private http: Http) {
  }

  getTodos(): Observable<Todo[]> {
    return this.http
      .get(TODO_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getTodo(id: number): Observable<Todo> {
    return this.http
      .get(`${TODO_API}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}