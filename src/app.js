import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from './stores/configureStore';
import getVisibleExpenses from './selectors/expense';
import { addExpense, removeExpense, editExpense } from './actions/expense';
import { filterText, sortByType, setStartDate, setEndDate } from './actions/filter';
import './styles/styles.scss';

const store = configureStore();

const content = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(content, document.getElementById('app'));

store.dispatch(addExpense({ description: 'January Rent', amount: 570, createdAt: 150 }));
store.dispatch(addExpense({ description: 'March Rent', amount: 630, createdAt: 525 }));
store.dispatch(filterText(''));
const result = getVisibleExpenses(store.getState().expenses, store.getState().filters);
console.log(result);

