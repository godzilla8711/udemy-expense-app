import { expect } from 'chai';

import getVisibleExpenses from '../../src/selectors/expense';

describe('Get visible expenses', () => {
  let testExpenses;
  let testFilters;

  beforeEach(() => {
    testExpenses = [{
      id: 123,
      description: 'January Rent',
      amount: 57000,
      createdAt: '2018-01-02',
      note: 'Rent check for January'
    }, {
      id: 234,
      description: 'March Rent',
      amount: 63500,
      createdAt: '2018-03-05',
      note: 'Rent check for March'
    }];

    testFilters = {
      text: undefined,
      sortBy: undefined, // date or amount
      startDate: undefined,
      endDate: undefined
    };
  });

  it('no filter returns all expenses', () => {
    const result = getVisibleExpenses(testExpenses, testFilters);
    expect(result).to.exist;
    expect(result).to.be.a('array');
    expect(result).to.have.length(2);
    expect(result).to.deep.equal(testExpenses);
  });

  it('filters by text', () => {

  });

  it('filters by text case insensitive', () => {

  });
});
