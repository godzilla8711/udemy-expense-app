import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expense-action';

function getExpenseId(props) {
  const query = new URLSearchParams(props.location.search);
  const expenseId = query.get('id');
  return expenseId;
}

class EditExpense extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitEdit = this.onSubmitEdit.bind(this);
  }

  onSubmitEdit(expense) {
    // Dispatch an action to update the store with the edited expense.
    this.props.dispatch(editExpense(this.props.expense.expenseId, expense));

    // Reload the expense dashboard.
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <p>Edit the details of Expense ID {getExpenseId(this.props)}</p>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmitEdit}
        />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const expenseId = getExpenseId(props);
  const expense = _.find(state.expenses, { expenseId });
  return {
    expense
  };
}

export default connect(mapStateToProps)(EditExpense);
