import { badRequest } from './common/badRequest';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {catchError,map} from 'rxjs/operators';
import { AppError } from './common/app-error';
import { notFoundError } from './common/not-found-error';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http: Http) { 
    
  }
  getTodos(){
    return this.http.get(this.url);
  }

  createTodo(todo){
    return this.http.post(this.url,JSON.stringify(todo)).pipe(
      catchError((error: Response) => {
        if (error.status === 400)
          return throwError(new badRequest());
        return throwError(new AppError(error));
      })
    );
  }

  deleteTodo(id) {
    return this.http.delete(this.url+ '/' +id).pipe(
      catchError((error:Response) => {
        if(error.status === 404)
          return throwError(new notFoundError());         
        return throwError(new AppError(error));
      })
    );
  }
}

