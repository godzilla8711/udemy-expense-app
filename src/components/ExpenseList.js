import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expense';

class ExpenseList extends React.Component {
  render() {
    return (
      <div>
        <p>This is the Expense Items with {this.props.expenses.length} expenses</p>
        {this.props.expenses.map(expense => {
          return <ExpenseListItem key={expense.description} expense={expense} />
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);
