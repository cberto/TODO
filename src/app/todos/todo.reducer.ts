import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { newTodo } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('New TODO'),
  new Todo('New'),
  new Todo('add TODO'),
  new Todo('update TODO'),


];

const _todoReducer = createReducer(
  initialState,
  on(newTodo, (state, { text }) => [...state, new Todo(text)]),

);

export function todoReducer(state: Todo[] = initialState, action: Action) {
  return _todoReducer(state, action);
}
