import { Injectable } from '@angular/core';
import { Todo } from './models/Todomodel';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  private tasks: Todo[] = [
    {
      completed: true,
      description: "that's completed already.",
      created: new Date
    },
    {
      completed: false,
      description: "complete it whenever.",
      created: new Date
    }
  ];
  constructor() { }
  getAll(): Todo[] {
    return this.tasks;
  }
  create(todo: Todo){
    this.tasks.push(todo);
  }
}
