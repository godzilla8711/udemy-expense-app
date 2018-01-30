import _ from 'lodash';


const DEFAULT_FILTERS = {
  text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
};

function filterReducer(state = DEFAULT_FILTERS, action) {
  switch (action.type) {
    case 'FILTER_TEXT': {
      let filters = _.cloneDeep(state);
      filters.text = action.text || DEFAULT_FILTERS.text;
      return filters;
    }
    case 'SORT_BY_TYPE': {
      let filters = _.cloneDeep(state);
      filters.sortBy = action.sortBy || DEFAULT_FILTERS.sortBy;
      return filters;
    }
    case 'SET_START_DATE': {
      let filters = _.cloneDeep(state);
      filters.startDate = action.startDate || DEFAULT_FILTERS.startDate;
      return filters;
    }
    case 'SET_END_DATE': {
      let filters = _.cloneDeep(state);
      filters.endDate = action.endDate || DEFAULT_FILTERS.endDate;
      return filters;
    }
    default:
      return state;
  }
}

export default filterReducer;
