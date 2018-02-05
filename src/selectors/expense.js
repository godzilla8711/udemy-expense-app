import _ from 'lodash';
import moment from 'moment';

function getVisibleExpenses(expenses, filters) {
  const text = filters.text ? _.toLower(filters.text) : '';
  const startDate = filters.startDate || moment(filters.startDate);
  const endDate = filters.endDate || moment(filters.endDate);

  const visibleExpenses = _.filter(expenses, expense => {
    const description = expense.description ? _.toLower(expense.description) : '';
    const isMatchingText = !text || description.includes(text);

    return isMatchingText;
  });

  return visibleExpenses;
}

export default getVisibleExpenses;

//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
