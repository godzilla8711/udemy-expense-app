import _ from 'lodash';
import moment from 'moment';

const DEFAULT_FILTERS = {
  description: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default function filterReducer(state = DEFAULT_FILTERS, action) {
  switch (action.type) {
    case 'FILTER_TEXT': {
      const filters = _.cloneDeep(state);
      filters.text = action.payload.text || DEFAULT_FILTERS.text;
      return filters;
    }
    case 'SORT_BY_TYPE': {
      const filters = _.cloneDeep(state);
      filters.sortBy = action.payload.sortBy || DEFAULT_FILTERS.sortBy;
      return filters;
    }
    case 'SET_START_DATE': {
      const filters = _.cloneDeep(state);
      filters.startDate = action.payload.startDate || DEFAULT_FILTERS.startDate;
      return filters;
    }
    case 'SET_END_DATE': {
      const filters = _.cloneDeep(state);
      filters.endDate = action.payload.endDate || DEFAULT_FILTERS.endDate;
      return filters;
    }
    default:
      return state;
  }
}
