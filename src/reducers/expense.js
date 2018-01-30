const DEFAULT_EXPENSES = [];

function expenseReducer(state = DEFAULT_EXPENSES, action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return state.concat(action.expense)
    case 'REMOVE_EXPENSE':
      return state.filter(expense => (expense.expenseId !== action.expenseId));
      // return _.filter(state, expense => expense.expenseId !== action.expenseReducer);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.expenseId === action.expenseId) {
          return Object.assign({}, expense, action.changedData);
        }
        return expense;
      });
    default:
      return state
  };
};

export default expenseReducer;
