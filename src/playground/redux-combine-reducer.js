import {createStore, combineReducers} from 'redux';

const DEFAULT_EXPENSES = [];
const DEFAULT_FILTERS = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const expenseReducer = (state = DEFAULT_EXPENSES, action) => {
  switch (action.type) {
    default: return state
  };
};

const filtersReducer = (state = DEFAULT_FILTERS, action) => {
  switch (action.type) {
    default: return state
  };
};

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

const sampleData = {
  expenses: [{
    id: 1234,
    description: 'January Rent',
    note: 'Final rent check for January',
    amount: 54500,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
