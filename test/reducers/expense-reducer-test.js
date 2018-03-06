import { expect } from 'chai';
import _ from 'lodash';

import expenseReducer from '../../src/reducers/expense-reducer';
import expenseItems from '../mock-data/expense-data';

describe('expense reducer', () => {
  let testExpenseItems;

  beforeEach(() => {
    testExpenseItems = _.cloneDeep(expenseItems);
  });

  it('creates initial state', () => {
    const result = expenseReducer(undefined, { type: '@@INIT' });
    expect(result).to.deep.equal([]);
  });

  it('adds expense', () => {
    const result = expenseReducer([testExpenseItems[0]], { type: 'ADD_EXPENSE', payload: testExpenseItems[2] });
    expect(result).to.deep.equal([testExpenseItems[0], testExpenseItems[2]]);
  });

  it('deletes expense', () => {
    const result = expenseReducer(testExpenseItems, {
      type: 'REMOVE_EXPENSE',
      payload: {
        expenseId: testExpenseItems[0].expenseId
      }
    });
    expect(result).to.deep.equal([testExpenseItems[1], testExpenseItems[2]]);
  });

  it('edits expense', () => {
    const changedData = {
      description: 'test value',
      amount: 12345
    };
    const result = expenseReducer(testExpenseItems, {
      type: 'EDIT_EXPENSE',
      payload: {
        expenseId: testExpenseItems[1].expenseId,
        changedData
      }
    });
    expect(result).to.deep.equal([testExpenseItems[0], Object.assign({}, testExpenseItems[1], changedData), testExpenseItems[2]]);
  });
});
