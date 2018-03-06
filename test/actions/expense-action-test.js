import _ from 'lodash';
import { expect } from 'chai';

import { addExpense, editExpense, removeExpense } from '../../src/actions/expense-action';

describe('expense action generator', () => {
  it('adds expense', () => {
    const testExpenseData = {
      description: 'January Rent',
      note: 'Final rent for January',
      amount: 54500,
      createdOn: '2018-02-05'
    };

    const result = addExpense(testExpenseData);
    expect(result).to.exist;
    expect(result).to.have.property('type', 'ADD_EXPENSE');
    expect(result).to.have.property('payload');
    expect(result.payload).to.include(testExpenseData);
    expect(result.payload).to.have.property('expenseId').that.is.not.empty;
  });

  it('adds expense with default values', () => {
    const result = addExpense({});
    expect(result).to.exist;
    expect(result).to.have.property('type', 'ADD_EXPENSE');
    expect(result).to.have.property('payload');
    expect(result.payload).to.include({
      description: null,
      note: null,
      amount: null,
      createdOn: null
    });
    expect(result.payload).to.have.property('expenseId').that.is.not.empty;
  });

  it('edits expense', () => {
    const testExpenseId = 123;
    const testChangedExpenseData = {
      description: 'March Rent',
      note: 'Final rent for March',
      amount: 63000,
      createdOn: '2018-02-07'
    };

    const result = editExpense(testExpenseId, testChangedExpenseData);
    expect(result).to.exist;
    expect(result).to.have.property('type', 'EDIT_EXPENSE');
    expect(result.payload).to.exist;
    expect(result.payload).to.have.property('expenseId', testExpenseId);
    expect(result.payload).to.have.property('changedData');
    expect(result.payload.changedData).to.include(testChangedExpenseData);
  });

  it('remove expense', () => {
    const testExpenseId = 234;

    const result = removeExpense(testExpenseId);
    expect(result).to.exist;
    expect(result).to.have.property('type', 'REMOVE_EXPENSE');
    expect(result.payload).to.exist;
    expect(result.payload).to.have.property('expenseId', testExpenseId);
  });
});
