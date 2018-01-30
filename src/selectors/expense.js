function getVisibleExpenses(expenses, filter) {
  if (!filter.text) {
    // No filter text, so allow all items.
    return expenses;
  }

  // Filter text was specified so apply it.
  console.log(expenses);
  return _.filter(expenses, expense => expense.description.indexOf(filter.text) > -1);
}

export default getVisibleExpenses;
