import _ from 'lodash';
import { expect } from 'chai';

import * as filterActionGen from '../../src/actions/filter-action';

describe('filter action generator', () => {
  it('filters text', () => {
    const textValue = 'abc';
    const action = filterActionGen.filterText(textValue);
    expect(action).to.deep.equal({
      type: 'FILTER_TEXT',
      payload: {
        text: textValue
      }
    });
  });

  it('sorts by type', () => {
    const sortByValue = 'amount';
    const action = filterActionGen.sortByType(sortByValue);
    expect(action).to.deep.equal({
      type: 'SORT_BY_TYPE',
      payload: {
        sortBy: sortByValue
      }
    });
  });

  it('sorts by unknown type', () => {
    const sortBy = 'abc';
    const action = filterActionGen.sortByType(sortBy);
    expect(action).to.deep.equal({});
  });

  it('filters by start date', () => {
    const startDateValue = '2018-02-10';
    const action = filterActionGen.setStartDate(startDateValue);
    expect(action).to.deep.equal({
      type: 'SET_START_DATE',
      payload: {
        startDate: startDateValue
      }
    });
  });

  it('filters by end date', () => {
    const endDateValue = '2018-03-17';
    const action = filterActionGen.setEndDate(endDateValue);
    expect(action).to.deep.equal({
      type: 'SET_END_DATE',
      payload: {
        endDate: endDateValue
      }
    });
  });
});
