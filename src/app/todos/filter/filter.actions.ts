import { createAction, props } from '@ngrx/store';

export type filterValidate = 'all' | 'completed' | 'pending';
export const setFilter = createAction('[Filter] Set Filter', props<{ filter: filterValidate }>());
