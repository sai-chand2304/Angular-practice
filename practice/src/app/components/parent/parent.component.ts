import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Todo } from '../../interfaces/Todo';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
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

  changed(todo:Todo){
    console.log(`Todo ${todo.id} is marked as completed`);
  }
}
