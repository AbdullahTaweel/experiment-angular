import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import {TodoService} from './todo.service'
import {Todo} from "./models/Todomodel"
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  newDescription = new FormControl('');
  tasks: Todo[] = [];

  constructor(private todoServise: TodoService) { }
  ngOnInit(){
    this.tasks = this.todoServise.getAll();
  }
  addTask(){
    this.todoServise.create({
      created: new Date,
      completed: true,
      description: this.newDescription.value
    })
  }

}
