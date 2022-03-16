import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../filter/filter.actions';
import { clearTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {


  filtroActual: actions.filterValidate = 'all';
  filters: actions.filterValidate[] = ['all', 'completed', 'pending']

  pendingTodo: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    /*  this.store.select('filter').subscribe(filter =>
        this.filtroActual = filter
      );*/

    this.store.subscribe(state => {
      this.filtroActual = state.filter;
      this.pendingTodo = state.todos.filter(todo => !todo.completed).length;
    })
  }
  changeFilter(filter: actions.filterValidate) {
    this.store.dispatch(actions.setFilter({ filter }));

  }

  clearTodoCompleted() {
    this.store.dispatch(clearTodo());
  }
}
