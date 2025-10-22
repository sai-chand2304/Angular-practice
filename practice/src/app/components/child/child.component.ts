import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../interfaces/Todo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() childMessage!: string;
  @Input() todos: Todo[] = [];
  @Output() todoChanged = new EventEmitter<Todo>();

  markAsDone(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = true;
      this.todoChanged.emit(todo);
    }
  }
}
