import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import initializeStore from './stores/expense';
import expenseActionGenerator from './actions/expense';
import filterActionGenerator from './actions/filter';
import getVisibleExpenses from './selectors/expense';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const { addExpense, removeExpense, editExpense } = expenseActionGenerator;
const { filterText, sortByType, setStartDate, setEndDate } = filterActionGenerator;

ReactDOM.render(<AppRouter />, document.getElementById('app'));

const store = initializeStore();

store.subscribe(() => {
  // console.log(store.getState());
  const { expenses, filters } = store.getState();
  console.log(getVisibleExpenses(expenses, filters));
});

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
