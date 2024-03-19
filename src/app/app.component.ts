import { Component } from '@angular/core';
import { todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
todos : todo[] = [];
  newtodo!: string;

  saveTodo(){
    if(this.newtodo){ 
      let Todo = new todo();
      todo.nome = this.newtodo;
      todo.Feito = true
      this.todos.push(todo);
      this.newtodo = '';
    }else{
      alert('Por favor insira alguma task')
    }
  }
}
