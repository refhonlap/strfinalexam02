import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<Todo[]> = this.todoService.getAll();

  selectedTodo: Todo = new Todo();

  // filter
  filterPhrase: string = '';
  filterKey: string = 'title';

  // sorter
  sortby: string = 'id';

  constructor(
    private todoService: TodoService,
  ) {}

  onCreate(todo: Todo): void {
    this.todoService.create(todo).subscribe(
      () => {
        this.todos$ = this.todoService.getAll();
      }
    )
  }
  
  onUpdate(todo: Todo): void{
    todo.active= !todo.active;
    this.todoService.update(todo).subscribe(
      ()=>console.log("done")
    )
  }

  setToDelete(todo: Todo): void {
    this.selectedTodo = todo;
  }
  
  onDelete(): void{
    this.todoService.delete(this.selectedTodo).subscribe(
      () => {
        this.todos$ = this.todoService.getAll();
      }
    )
  }

  sorter(param: string): void {
    this.sortby = param;
  }
}
