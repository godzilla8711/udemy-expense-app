import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expense-action';

class ExpenseListItem extends React.Component {
  render() {
    const { expense } = this.props;
    return (
      <div>
        <h3>Description: <Link to={`/edit?id=${expense.expenseId}`}>{expense.description}</Link></h3>
        <p>Amount: {expense.amount}   Created Date: {expense.createdOn}</p>
        <button onClick={e => this.props.dispatch(removeExpense(expense.expenseId))} >
          Remove Expense
        </button>
      </div>
    );
  }
}

export default connect()(ExpenseListItem);
