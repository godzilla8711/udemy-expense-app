import { createStore, combineReducers } from 'redux';

import { expenseReducer } from '../reducers/expense';
import { filterReducer } from '../reducers/filter';

export function configureStore() {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
    })
  );

  return store;
}
