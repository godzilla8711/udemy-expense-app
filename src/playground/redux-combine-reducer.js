import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
import _ from 'lodash';

const DEFAULT_EXPENSES = [];
const DEFAULT_FILTERS = {
  text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
};

// ---------------------- Action Generators

function addExpense(expense) {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      expenseId: uuid(),
      description: expense.description || null,
      note: expense.note || null,
      amount: expense.amount || null,
      created: expense.createdAt || null
    }
  };
}

function editExpense(expenseId, changedData) {
  return {
    type: 'EDIT_EXPENSE',
    expenseId,
    changedData
  };
}

function removeExpense(expenseId) {
  return {
    type: 'REMOVE_EXPENSE',
    expenseId
  };
}

function filterText(text = '') {
  return {
    type: 'FILTER_TEXT',
    text
  };
}

function sortByType(sortBy) {
  return {
    type: 'SORT_BY_TYPE',
    sortBy
  };
}

function setStartDate(startDate) {
  return {
    type: 'SET_START_DATE',
    startDate
  };
}

function setEndDate(endDate) {
  return {
    type: 'SET_END_DATE',
    endDate
  };
}

// ---------------------- Reducers

function expenseReducer(state = DEFAULT_EXPENSES, action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return state.concat(action.expense)
    case 'REMOVE_EXPENSE':
      return state.filter(expense => (expense.expenseId !== action.expenseId));
      // return _.filter(state, expense => expense.expenseId !== action.expenseReducer);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.expenseId === action.expenseId) {
          return Object.assign({}, expense, action.changedData);
        }
        return expense;
      });
    default:
      return state
  };
};

function filterReducer(state = DEFAULT_FILTERS, action) {
  switch (action.type) {
    case 'FILTER_TEXT': {
      let filters = _.cloneDeep(state);
      filters.text = action.text || DEFAULT_FILTERS.text;
      return filters;
    }
    case 'SORT_BY_TYPE': {
      let filters = _.cloneDeep(state);
      filters.sortBy = action.sortBy || DEFAULT_FILTERS.sortBy;
      return filters;
    }
    case 'SET_START_DATE': {
      let filters = _.cloneDeep(state);
      filters.startDate = action.startDate || DEFAULT_FILTERS.startDate;
      return filters;
    }
    case 'SET_END_DATE': {
      let filters = _.cloneDeep(state);
      filters.endDate = action.endDate || DEFAULT_FILTERS.endDate;
      return filters;
    }
    default:
      return state;
  }
}

// ---------------------- Store

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  // console.log(store.getState());
  const {expenses, filters} = store.getState();
  console.log(getVisibleExpenses(expenses, filters));
});

function getVisibleExpenses(expenses, filter) {
  if (!filter.text) {
    // No filter text, so allow all items.
    return expenses;
  }

  // Filter text was specified so apply it.
  console.log(expenses);
  return _.filter(expenses, expense => expense.description.indexOf(filter.text) > -1);
}

let addExpenseAction = store.dispatch(addExpense({ description: 'December Rent', amount: 7500 }));
let removedExpenseAction = store.dispatch(removeExpense(addExpenseAction.expense.expenseId));
addExpenseAction = store.dispatch(addExpense({ description: 'January Rent', amount: 6300 }));
addExpenseAction = store.dispatch(addExpense({ description: 'Februay Rent', amount: 6400 }));
let editExpenseAction = store.dispatch(editExpense(
  addExpenseAction.expense.expenseId, { description: 'March Rent', note: 'Updated month of rent' }
));

store.dispatch(filterText('March'));
store.dispatch(filterText());
store.dispatch(sortByType('date'));
store.dispatch(sortByType());
store.dispatch(setStartDate(120));
store.dispatch(setStartDate());
store.dispatch(setEndDate(145));
store.dispatch(setEndDate());

store.dispatch(filterText('March'));
store.dispatch(filterText());

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
