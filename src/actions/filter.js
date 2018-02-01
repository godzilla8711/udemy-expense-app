export function filterText(text = '') {
  return {
    type: 'FILTER_TEXT',
    text
  };
}

export function sortByType(sortBy) {
  return {
    type: 'SORT_BY_TYPE',
    sortBy
  };
}

export function setStartDate(startDate) {
  return {
    type: 'SET_START_DATE',
    startDate
  };
}

export function setEndDate(endDate) {
  return {
    type: 'SET_END_DATE',
    endDate
  };
}
