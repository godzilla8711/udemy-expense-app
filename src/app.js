import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';

import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from './stores/configureStore';
import getVisibleExpenses from './selectors/expense-selector';
import { addExpense, removeExpense, editExpense } from './actions/expense-action';
import { filterText, sortByType, setStartDate, setEndDate } from './actions/filter-action';
import './styles/styles.scss';

const store = configureStore();

const content = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(content, document.getElementById('app'));

// Initialize the list of expenses.
store.dispatch(addExpense({ description: 'January Rent', amount: 570, createdOn: moment().subtract(3, 'days').valueOf() }));
store.dispatch(addExpense({ description: 'October Rent', amount: 1430, createdOn: moment().valueOf() }));
store.dispatch(addExpense({ description: 'March Rent', amount: 101, createdOn: moment().add(3, 'days').valueOf() }));

// store.dispatch(filterText(''));
// const result = getVisibleExpenses(store.getState().expenses, store.getState().filters);
// console.log(result);

