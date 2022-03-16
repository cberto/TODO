import { createAction, props } from '@ngrx/store';

export const newTodo = createAction('[TODO] New TODO', props<{ text: string }>());

export const toggle = createAction('[TODO] Toggle TODO', props<{ id: number }>());


export const editTodo = createAction('[TODO] Edit TODO', props<{ id: number, text: string }>());


export const deleteTodo = createAction('[TODO] Delete TODO', props<{ id: number }>());


export const toggleAll = createAction('[TODO] ToggleAll TODO', props<{ completed: boolean }>());

export const clearTodo = createAction('[TODO] clearTodo TODO');
