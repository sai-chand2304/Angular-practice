import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Todo } from '../../interfaces/Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  todos:Todo[]=[
    {id:1, title:'Learn Angular', completed:false},
    {id:2, title:'Build an App', completed:false},
    {id:3, title:'Deploy the App', completed:false}
  ];

  message:string="Hi, message in parent component";
  newTodo: Todo = {
    id: 0,
    title: '',
    completed: false
  };

  changed(todo:Todo){
    console.log(`Todo ${todo.id} is marked as completed`);
  }

  addTodo() {
    if (this.newTodo.title.trim()) {
      // Calculate next ID based on the highest existing ID
      const nextId = Math.max(...this.todos.map(todo => todo.id), 0) + 1;
      
      // Create new todo with auto-incremented ID and default completed as false
      const todoToAdd: Todo = {
        id: nextId,
        title: this.newTodo.title,
        completed: false
      };

      // Add to todos array
      this.todos.push(todoToAdd);

      // Reset the form
      this.newTodo = {
        id: 0,
        title: '',
        completed: false
      };
    }
  }
}
