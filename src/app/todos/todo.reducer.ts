import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { clearTodo, deleteTodo, editTodo, newTodo, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('New TODO'),
  new Todo('New'),
  new Todo('add TODO'),
  new Todo('update TODO'),


];

const _todoReducer = createReducer(
  initialState,
  on(newTodo, (state, { text }) => [...state, new Todo(text)]),
  on(clearTodo, (state) => state.filter(todo => !todo.completed)),

  on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),

  on(toggleAll, (state, { completed }) => state.map(todo => {
    return {
      ...todo,
      completed: completed,
    }
  })),

  on(toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {

        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }
    })
  }),

  on(editTodo, (state, { id, text }) => {
    return state.map(todo => {
      if (todo.id === id) {

        return {
          ...todo,
          text: text
        }
      } else {
        return todo;
      }
    })
  }),

);

export function todoReducer(state: Todo[] = initialState, action: Action) {
  return _todoReducer(state, action);
}
