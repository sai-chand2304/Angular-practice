import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/Todo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(private http:HttpClient) { }

  private apiUrl ='https://jsonplaceholder.typicode.com/todos';

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl)
  }

  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.apiUrl,todo);
  }

  updateTodo(todo:Todo):Observable<Todo>{
    return this.http.put<Todo>(`${this.apiUrl}/${todo.id}`,todo);
  }

  deleteTodo(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
