import React from 'react';

import ExpenseForm from './ExpenseForm';

class AddExpense extends React.Component {
  render() {
    return (
      <div>
        <h2>Add a new expense</h2>
        <ExpenseForm />
      </div>
    );
  }
}

export default AddExpense;
