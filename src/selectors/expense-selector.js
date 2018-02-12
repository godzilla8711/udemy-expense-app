import _ from 'lodash';
import moment from 'moment';

export default (expenses, filters) => {
  const text = filters.text ? _.toLower(filters.text) : '';
  const startDate = filters.startDate && moment(filters.startDate);
  const endDate = filters.endDate && moment(filters.endDate);
  const { sortBy } = filters;

  // Filter out expenses based on criteria.
  const visibleExpenses = _.filter(expenses, expense => {
    const description = expense.description ? _.toLower(expense.description) : '';

    const isMatchingText = !text || description.includes(text);
    const isMatchingStartDate = !startDate || startDate.isSameOrBefore(expense.createdOn, 'day');
    const isMatchingEndDate = !endDate || endDate.isSameOrAfter(expense.createdOn, 'day');

    return (isMatchingText && isMatchingStartDate && isMatchingEndDate);
  });

  // Sort expenses based on criteria.
  let sortedExpenses;
  if (sortBy === 'amount') {
    // Sort by amount.
    sortedExpenses = _.sortBy(visibleExpenses, 'amount');
  } else if (sortBy === 'date') {
    // Sort by date.
    sortedExpenses = _.sortBy(visibleExpenses, 'createdOn');
  } else {
    // Perform no sort.
    sortedExpenses = visibleExpenses;
  }

  return sortedExpenses;
};
