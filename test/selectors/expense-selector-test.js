import _ from 'lodash';
import { expect } from 'chai';

import getVisibleExpenses from '../../src/selectors/expense-selector';

describe('Get visible expenses', () => {
  let testExpenses;
  let testFilters;

  beforeEach(() => {
    testExpenses = [{
      id: 234,
      description: 'August Rent',
      createdAt: '2018-08-07',
      amount: 63500,
      note: 'Rent check for March'
    }, {
      id: 234,
      createdAt: '2018-03-04',
      description: 'March Rent',
      note: 'Rent check for March'
    }, {
      id: 123,
      description: 'January Rent',
      amount: 57000,
      createdAt: '2018-01-05',
      note: 'Rent check for January'
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
    expect(result).to.have.length(3);
    expect(result).to.deep.equal(testExpenses);
  });

  it('filters by text', () => {
    testFilters.text = 'March';
    const result = getVisibleExpenses(testExpenses, testFilters);
    expect(result).to.exist;
    expect(result).to.be.a('array');
    expect(result).to.have.length(1);
    expect(result[0]).to.deep.equal(_.find(testExpenses, { description: 'March Rent' }));
  });

  it('filters by text case insensitive', () => {
    testFilters.text = 'aug';
    const result = getVisibleExpenses(testExpenses, testFilters);
    expect(result).to.exist;
    expect(result).to.be.a('array');
    expect(result).to.have.length(1);
    expect(result[0]).to.deep.equal(_.find(testExpenses, { description: 'August Rent' }));
  });

  it('filters by start date', () => {
    testFilters.startDate = '2018-06-01';
    const result = getVisibleExpenses(testExpenses, testFilters);
    expect(result).to.exist;
    expect(result).to.be.a('array');
    expect(result).to.have.length(1);
    expect(result[0]).to.deep.equal(_.find(testExpenses, { description: 'August Rent' }));
  });

  it('filters by start date beyond last expense', () => {
    testFilters.startDate = '2019-01-01';
    const result = getVisibleExpenses(testExpenses, testFilters);
    expect(result).to.be;
    expect(result).to.be.a('array');
    expect(result).to.have.length(0);
  });

  it('filters by end date', () => {
    testFilters.endDate = '2018-02-01';
    const result = getVisibleExpenses(testExpenses, testFilters);
    expect(result).to.exist;
    expect(result).to.be.a('array');
    expect(result).to.have.length(1);
    expect(result[0]).to.deep.equal(_.find(testExpenses, { description: 'January Rent' }));
  });

  it('filters by end date before first expense', () => {
    testFilters.endDate = '2017-01-01';
    const result = getVisibleExpenses(testExpenses, testFilters);
    expect(result).to.be;
    expect(result).to.be.a('array');
    expect(result).to.have.length(0);
  });

  it('filters by both start and end date', () => {
    testFilters.startDate = '2018-02-01';
    testFilters.endDate = '2018-05-01';
    const result = getVisibleExpenses(testExpenses, testFilters);
    expect(result).to.be;
    expect(result).to.be.a('array');
    expect(result).to.have.length(1);
    expect(result[0]).to.deep.equal(_.find(testExpenses, { description: 'March Rent' }));
  });

  it('sorts by date', () => {
    testFilters.sortBy = 'date';
    const result = getVisibleExpenses(testExpenses, testFilters);
    expect(result).to.be;
    expect(result).to.be.a('array');
    expect(result).to.have.length(3);
    expect(result[0]).to.deep.equal(_.find(testExpenses, { description: 'January Rent' }));
    expect(result[1]).to.deep.equal(_.find(testExpenses, { description: 'March Rent' }));
    expect(result[2]).to.deep.equal(_.find(testExpenses, { description: 'August Rent' }));
  });

  it('sorts by amount', () => {
    testFilters.sortBy = 'amount';
    const result = getVisibleExpenses(testExpenses, testFilters);
    expect(result).to.be;
    expect(result).to.be.a('array');
    expect(result).to.have.length(3);
    expect(result[0]).to.deep.equal(_.find(testExpenses, { description: 'January Rent' }));
    expect(result[1]).to.deep.equal(_.find(testExpenses, { description: 'August Rent' }));
    expect(result[2]).to.deep.equal(_.find(testExpenses, { description: 'March Rent' }));
  });

  it('default sort by insertion order', () => {
    testFilters.sortBy = 'unknown';
    const result = getVisibleExpenses(testExpenses, testFilters);
    expect(result).to.be;
    expect(result).to.be.a('array');
    expect(result).to.have.length(3);
    expect(result).to.deep.equal(testExpenses);
  });
});
