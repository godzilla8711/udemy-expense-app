import { createStore, combineReducers } from 'redux';

import expenseReducer from '../reducers/expense-reducer';
import filterReducer from '../reducers/filter-reducer';

export default function configureStore() {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
    })
  );

  return store;
}
