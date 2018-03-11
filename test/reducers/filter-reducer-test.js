import { expect } from 'chai';
import moment from 'moment';

import filterReducer from '../../src/reducers/filter-reducer';

describe('filter reducer', () => {
  let testActionData;

  beforeEach(() => {
    testActionData = {
      type: undefined,
      payload: {}
    };
  });

  it('creates initial state', () => {
    const result = filterReducer(undefined, { type: '@@INIT' });
    expect(result).to.exist;
    expect(result).to.deep.equal({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    });
  });

  it('filters on text', () => {
    testActionData.type = 'FILTER_TEXT';
    testActionData.payload.text = 'value1';
    const result = filterReducer(undefined, testActionData);
    expect(result).to.have.property('text', 'value1');
  });

  it('filters on text with default', () => {
    testActionData.type = 'FILTER_TEXT';
    testActionData.payload.text = null;
    const result = filterReducer(undefined, testActionData);
    expect(result).to.have.property('text', '');
  });

  it('sorts by amount', () => {
    testActionData.type = 'SORT_BY_TYPE';
    testActionData.payload.sortBy = 'amount';
    const result = filterReducer({ sortBy: '' }, testActionData);
    expect(result).to.have.property('sortBy', 'amount');
  });

  it('sorts by date', () => {
    testActionData.type = 'SORT_BY_TYPE';
    testActionData.payload.sortBy = 'date';
    const result = filterReducer({ sortBy: '' }, testActionData);
    expect(result).to.have.property('sortBy', 'date');
  });

  it('sort by with default', () => {
    testActionData.type = 'SORT_BY_TYPE';
    testActionData.payload.sortBy = null;
    const result = filterReducer(undefined, testActionData);
    expect(result).to.have.property('sortBy', 'date');
  });

  it('sets start date', () => {
    const currentTimestamp = moment.utc();
    testActionData.type = 'SET_START_DATE';
    testActionData.payload.startDate = currentTimestamp;
    const result = filterReducer(undefined, testActionData);
    expect(result).to.have.property('startDate', currentTimestamp);
  });

  it('sets start date with default', () => {
    testActionData.type = 'SET_START_DATE';
    testActionData.payload.startDate = null;
    const result = filterReducer(undefined, testActionData);
    expect(result.startDate).to.exist;
    expect(result.startDate.toISOString()).to.equal(moment().startOf('month').toISOString());
  });

  it('sets end date', () => {
    const currentTimestamp = moment.utc();
    testActionData.type = 'SET_END_DATE';
    testActionData.payload.endDate = currentTimestamp;
    const result = filterReducer(undefined, testActionData);
    expect(result).to.have.property('endDate', currentTimestamp);
  });

  it('sets end date with default', () => {
    testActionData.type = 'SET_END_DATE';
    testActionData.payload.endDate = null;
    const result = filterReducer(undefined, testActionData);
    expect(result.endDate).to.exist;
    expect(result.endDate.toISOString()).to.equal(moment().endOf('month').toISOString());
  });
});
