import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expense-action';

class ExpenseListItem extends React.Component {
  render() {
    const { expense } = this.props;
    return (
      <div>
        <h3>Description: {expense.description}</h3>
        <p>Amount: {expense.amount}   Created Date: {expense.createdAt}</p>
        <button onClick={e => this.props.dispatch(removeExpense(expense.expenseId))} >
          Remove Expense
        </button>
      </div>
    );
  }
}

export default connect()(ExpenseListItem);
