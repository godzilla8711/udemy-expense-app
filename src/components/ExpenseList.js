import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expense-selector';

export class ExpenseList extends React.Component {
  render() {
    return (
      <div>
        <h2>List of {this.props.expenses.length} expenses</h2>
        {this.props.expenses.map(expense => {
          return <ExpenseListItem key={expense.description} expense={expense} />;
        })}
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);
