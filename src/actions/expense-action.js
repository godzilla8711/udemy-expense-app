import uuid from 'uuid';

export function addExpense(expense) {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      expenseId: uuid(),
      description: expense.description || null,
      note: expense.note || null,
      amount: expense.amount || null,
      createdOn: expense.createdOn || null
    }
  };
}

export function editExpense(expenseId, changedData) {
  return {
    type: 'EDIT_EXPENSE',
    expenseId,
    changedData
  };
}

export function removeExpense(expenseId) {
  return {
    type: 'REMOVE_EXPENSE',
    expenseId
  };
}
