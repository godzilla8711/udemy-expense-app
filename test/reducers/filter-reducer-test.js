import { expect } from 'chai';
import moment from 'moment';

import filterReducer from '../../src/reducers/filter-reducer';

describe('filter reducer', () => {
  it('creates initial state', () => {
    const result = filterReducer(undefined, { type: '@@INIT' });
    expect(result).to.exist;
    expect(result).to.deep.equal({
      description: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    });
  });
});
