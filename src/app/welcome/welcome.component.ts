import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  numberoftasks = 0;

  constructor( private todoService: TodoService) { }

  ngOnInit() {
    this.numberoftasks = this.todoService.getAll().length;
  }

}
