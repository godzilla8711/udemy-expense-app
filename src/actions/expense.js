import uuid from 'uuid';

const actionGenerator = {
  addExpense(expense) {
    return {
      type: 'ADD_EXPENSE',
      expense: {
        expenseId: uuid(),
        description: expense.description || null,
        note: expense.note || null,
        amount: expense.amount || null,
        created: expense.createdAt || null
      }
    };
  },

  editExpense(expenseId, changedData) {
    return {
      type: 'EDIT_EXPENSE',
      expenseId,
      changedData
    };
  },

  removeExpense(expenseId) {
    return {
      type: 'REMOVE_EXPENSE',
      expenseId
    };
  }
};

export default actionGenerator
