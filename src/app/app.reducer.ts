import { ActionReducerMap } from "@ngrx/store";
import { filterValidate } from "./todos/filter/filter.actions";
import { filterReducer } from "./todos/filter/filter.reducer";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";

export interface AppState {
  todos: Todo[],
  filter: filterValidate
}


export const appReducers: ActionReducerMap<AppState> = {

  todos: todoReducer,
  filter: filterReducer

}
