import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';

  newTodo = '';
  todos: string[] = [];

  ngOnInit() {
    
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push(this.newTodo);
      this.saveTodos(); 
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos(); 
  }

  private saveTodos() {

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
  // inputData: string = ''; 
  // savedData: string[] = []; 

  // newTodo = '';
  // todos: string[] = [];

  // saveData() 
  // {
  //   if (this.inputData.trim() !== '')
  //    {
  //     this.savedData.push(this.inputData);
  //      localStorage.setItem('userData', JSON.stringify(this.savedData));
  //    this.inputData = ''; 
  //    }
  //  }
  //  removeTodo(index: number) 
  //     {
  //       this.todos.splice(index, 1);
  //     }

  // }
  
  // // addTodo() 
  // // {
  // //   if (this.newTodo.trim() !== '')
  // //    {
  // //     this.todos.push(this.newTodo);
  // //     this.newTodo = '';
  // //   }
  // // }
  
