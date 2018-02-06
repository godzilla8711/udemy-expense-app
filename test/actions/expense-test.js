import _ from 'lodash';
import { expect } from 'chai';

import { addExpense } from '../../src/actions/expense';

describe('expense action generator', () => {
  it('adds expense', () => {
    const testExpenseData = {
      description: 'January Rent',
      note: 'Final rent for January',
      amount: 54500,
      createdAt: '2018-02-05'
    };

    const result = addExpense(testExpenseData);
    expect(result).to.exist;
    expect(result).to.have.property('type', 'ADD_EXPENSE');
    expect(result).to.have.property('expense');
    expect(result.expense).to.have.property('expenseId');
    expect(result.expense.expenseId).to.be.string;
    expect(result.expense.expenseId).not.to.be.empty;

    const expenseWithoutId = _.omit(result.expense, 'expenseId');
    expect(expenseWithoutId).to.deep.equal(testExpenseData);
  });
});
