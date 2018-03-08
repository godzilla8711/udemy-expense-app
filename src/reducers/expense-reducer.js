const DEFAULT_EXPENSES = [];

export default function expenseReducer(state = DEFAULT_EXPENSES, action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return state.concat(action.payload);
    case 'REMOVE_EXPENSE':
      return state.filter(expense => (expense.expenseId !== action.payload.expenseId));
      // return _.filter(state, expense => expense.expenseId !== action.expenseReducer);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.expenseId === action.payload.expenseId) {
          console.log('Found match!');
          return Object.assign({}, expense, action.payload.changedData);
        }
        return expense;
      });
    default:
      return state;
  }
}
