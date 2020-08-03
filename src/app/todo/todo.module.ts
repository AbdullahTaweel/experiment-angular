import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import {AppRoutingModule} from '../app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }
