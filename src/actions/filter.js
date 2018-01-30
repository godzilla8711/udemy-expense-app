const actionGenerator = {
  filterText(text = '') {
    return {
      type: 'FILTER_TEXT',
      text
    };
  },

  sortByType(sortBy) {
    return {
      type: 'SORT_BY_TYPE',
      sortBy
    };
  },

  setStartDate(startDate) {
    return {
      type: 'SET_START_DATE',
      startDate
    };
  },

  setEndDate(endDate) {
    return {
      type: 'SET_END_DATE',
      endDate
    };
  }
}

export default actionGenerator;
