import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { configureStore } from './stores/configureStore';
import getVisibleExpenses from './selectors/expense';
import { addExpense, removeExpense, editExpense } from './actions/expense';
import { filterText, sortByType, setStartDate, setEndDate } from './actions/filter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
console.log(store.getState());

const content = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(content, document.getElementById('app'));

store.dispatch(addExpense({ description: 'January Rent', amount: 570, createdAt: 150}));
store.dispatch(addExpense({ description: 'March Rent', amount: 630, createdAt: 525}));
store.dispatch(filterText('March'));
const result = getVisibleExpenses(store.getState().expenses, store.getState().filters);
console.log(result);

