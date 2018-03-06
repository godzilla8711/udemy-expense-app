import debug from 'debug';

const error = debug('expense-app:filter-action:error');

export function filterText(text = '') {
  return {
    type: 'FILTER_TEXT',
    payload: {
      text
    }
  };
}

export function sortByType(sortBy) {
  if (sortBy !== 'amount' && sortBy !== 'date') {
    error(`Error -- unknown value for sortBy ${sortBy}`);
    return {};
  }

  return {
    type: 'SORT_BY_TYPE',
    payload: {
      sortBy
    }
  };
}

export function setStartDate(startDate) {
  return {
    type: 'SET_START_DATE',
    payload: {
      startDate
    }
  };
}

export function setEndDate(endDate) {
  return {
    type: 'SET_END_DATE',
    payload: {
      endDate
    }
  };
}
