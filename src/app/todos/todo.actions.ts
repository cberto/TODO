import { createAction, props } from '@ngrx/store';

export const newTodo = createAction('[TODO] New TODO', props<{ text: string }>());
