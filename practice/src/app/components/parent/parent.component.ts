import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Todo } from '../../interfaces/Todo';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {

  
  constructor(private toDoService:TodoService){}
  pending:any[]=[];
  completed:any[]=[];
  ngOnInit(): void {
    this.fetchTodos();

    // this.toDoService.getTasksWithUsers().subscribe({
    //   next:(tasks)=>{
    //     this.pending=tasks.slice(0,5).filter(t=>!t.completed);
    //     this.completed=tasks.slice(0,5).filter(t=>t.completed);
    //   },
    //   error:err=>console.error('Error fetching tasks with users:',err)
    // });
  }

  todos:Todo[]=[];

  message:string="Hi, message in parent component";

  changed(todo:Todo){
    console.log(`Todo ${todo.id} is marked as completed`);
  }

  newTodo: Todo = {
    id: 0,
    title: '',
    completed: false
  };

  fetchTodos(){
    this.toDoService.getTodos().subscribe({
      next:(data)=>this.todos=data.slice(0,5),
      error:(err)=>console.error("erroe fetching todos:",err)
    })
  }
  addTodo() {
    if (this.newTodo.title.trim()) {
      this.toDoService.addTodo(this.newTodo).subscribe({
        next:(newTodo)=>{
            this.todos.push(newTodo);
            this.newTodo = {
            id: 0,
            title: '',
            completed: false
          };
        },
        error:(err)=>{console.error('Error adding todo:',err)}
      });
      // const todoToAdd: Todo = {
      //   id: nextId,
      //   title: this.newTodo.title,
      //   completed: false
      // };
      
    }
  }


}
