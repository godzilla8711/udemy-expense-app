import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expense-action';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitAdd = this.onSubmitAdd.bind(this);
  }

  onSubmitAdd(expense) {
    // Dispatch an action to update the store with the added expense.
    this.props.dispatch(addExpense(expense));

    // Reload the expense dashboard.
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h2>Add a new expense</h2>
        <ExpenseForm onSubmit={this.onSubmitAdd} />
      </div>
    );
  }
}

export default connect()(AddExpense);
