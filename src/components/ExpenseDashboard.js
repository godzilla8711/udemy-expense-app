import React from 'react';
import ReactDOM from 'react-dom';

import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

class ExpenseDashboard extends React.Component {
  render() {
    return (
      <div>
        <ExpenseListFilter />
        <ExpenseList />
      </div>
    );
  }
}

export default ExpenseDashboard;
