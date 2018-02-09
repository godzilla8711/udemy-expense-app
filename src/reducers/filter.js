import _ from 'lodash';


const DEFAULT_FILTERS = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

export default function filterReducer(state = DEFAULT_FILTERS, action) {
  switch (action.type) {
    case 'FILTER_TEXT': {
      const filters = _.cloneDeep(state);
      filters.text = action.text || DEFAULT_FILTERS.text;
      return filters;
    }
    case 'SORT_BY_TYPE': {
      const filters = _.cloneDeep(state);
      filters.sortBy = action.sortBy || DEFAULT_FILTERS.sortBy;
      return filters;
    }
    case 'SET_START_DATE': {
      const filters = _.cloneDeep(state);
      filters.startDate = action.startDate || DEFAULT_FILTERS.startDate;
      return filters;
    }
    case 'SET_END_DATE': {
      const filters = _.cloneDeep(state);
      filters.endDate = action.endDate || DEFAULT_FILTERS.endDate;
      return filters;
    }
    default:
      return state;
  }
}
