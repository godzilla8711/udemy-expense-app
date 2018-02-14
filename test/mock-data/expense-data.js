import moment from 'moment';

const expenses = [{
  expenseId: 1001,
  description: 'January Rent',
  note: 'Final rent check for January',
  amount: 54500,
  createdOn: moment('2018-01-03').valueOf()
}, {
  expenseId: 1002,
  description: 'May Rent',
  note: 'Final rent check for May',
  amount: 72500,
  createdOn: moment('2018-05-07').valueOf()
}, {
  expenseId: 1003,
  description: 'February Rent',
  note: 'Final rent check for February',
  amount: 38500,
  createdOn: moment('2018-03-05').valueOf()
}];

export default expenses;
