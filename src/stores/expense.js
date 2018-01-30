import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expense';
import filterReducer from '../reducers/filter';

function initializeStore() {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
    })
  );

  return store;
}

export default initializeStore;

// ---------------------------- Sample Data
const sampleData = {
  expenses: [{
    id: 1234,
    description: 'January Rent',
    note: 'Final rent check for January',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
