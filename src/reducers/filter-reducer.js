import _ from 'lodash';
import moment from 'moment';

const DEFAULT_FILTERS = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default function filterReducer(state = DEFAULT_FILTERS, action) {
  switch (action.type) {
    case 'FILTER_TEXT': {
      return Object.assign(
        {},
        state.filters,
        { text: action.payload.text || DEFAULT_FILTERS.text }
      );
    }
    case 'SORT_BY_TYPE': {
      return Object.assign(
        {},
        state,
        { sortBy: action.payload.sortBy || DEFAULT_FILTERS.sortBy }
      );
    }
    case 'SET_START_DATE': {
      return Object.assign(
        {},
        state,
        { startDate: action.payload.startDate || DEFAULT_FILTERS.startDate }
      );
    }
    case 'SET_END_DATE': {
      return Object.assign(
        {},
        state,
        { endDate: action.payload.endDate || DEFAULT_FILTERS.endDate }
      );
    }
    default:
      return state;
  }
}
