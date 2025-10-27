import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/Todo';
import { map, Observable, switchMap } from 'rxjs';
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



  private todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  getTasksWithUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.todosUrl).pipe(
      switchMap(todos=>{
        return this.http.get<any[]>(this.usersUrl).pipe(
          map((users: any[]) => 
            todos.slice(0.5).map(todo=>{
              const user = users.find(u => u.id === todo.userId);
              return {...todo, userName: user ? user.name : 'Unknown'
              }; 
            })
          )
        );
      })
    );
  }

}
