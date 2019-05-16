import { Component } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent {
  todos: Todo[] = [
    {
      task: "take out trash",
      completed: false
    },
    {
      task: "wash my clothes",
      completed: false
    },
    {
      task: "clean the bathroom",
      completed: false
    }
  ];
  addTodo(form) {
    this.todos.push({
      task: form.value.todo,
      completed: false
    });
    console.log(this.todos);
  }
  completeTask(index) {
    this.todos[index].completed = true;
  }
  deleteTask(index) {
    this.todos.splice(index, 1);
  }
}
