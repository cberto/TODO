import { Action, createReducer, on } from '@ngrx/store';
import { filterValidate, setFilter } from './filter.actions';

export const initialState: filterValidate = 'all';

const _filterReducer = createReducer<filterValidate, Action>(
  initialState,
  on(setFilter, (state: filterValidate, { filter }) => filter),
);

export function filterReducer(state = initialState, action: Action) {
  return _filterReducer(state, action);
}
