export default expenses =>
  expenses
    .map(expense => expense.amount)
    .reduce((sum, expense) => sum + expense, 0);
