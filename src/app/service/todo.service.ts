import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  endPoint: string = 'http://localhost:3000/todos';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.endPoint);
  }

  get(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.endPoint}/${id}`);
  }

  /**
   * Create a new Todo.
   * @method: this.http.post
   */
  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.endPoint, todo);
  }

  /**
   * Update a Todo.
   * @method: this.http.patch
   */
  update(todo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(`${this.endPoint}/${todo.id}`, todo);
  }

  /**
   * Delete a Todo.
   * @method: this.http.delete
   */
  delete(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${this.endPoint}/${todo.id}`);
  }

}
