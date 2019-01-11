import { badRequest } from './../common/badRequest';
import { TodoService } from './../todo.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { notFoundError } from '../common/not-found-error';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  todos: any[];
  constructor(private service: TodoService) { 
  }

  createTodo(input: HTMLInputElement) {
    console.log(input.value);
    let todo = { title: input.value };
    input.value = '';
    this.service.createTodo(todo)
      .subscribe(
        response => {
          todo['id'] = response.json().id;
          this.todos.splice(0,0,todo);
        },
        (error:AppError)=>{
          if(error instanceof badRequest){
              console.log(error);
          }
          else{
            alert("An Unexpected Error Occured");
          }
        }
    );
  }

  deleteTodo(todo){
    this.service.deleteTodo(todo.id)
      .subscribe(response => {
        let index = this.todos.indexOf(todo);
        this.todos.splice(index,1);
      }, (error: AppError) =>{
        if(error instanceof notFoundError){
          alert(`This post is already deleted`);
        }
        else{
          alert("An Unexpected Error Occured");
          console.log(error);
        }
      }
    )
  }

  ngOnInit() {
    this.service.getTodos()
      .subscribe(response =>{
          this.todos = response.json();
          console.log(this.todos);
      });
  }
}
