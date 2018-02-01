import React from 'react';

export default class ExpenseListItem extends React.Component {
  render() {
    const expense = this.props.expense;
    return (
      <div>
        <h3>Description: {expense.description}</h3>
        <p>Amount: {expense.amount}   Created Date: {expense.createdAt}</p>
      </div>
    );
  }
}
