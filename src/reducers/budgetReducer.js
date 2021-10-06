const budgetReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };

    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case 'DELETE_INCOME':
      return {
        ...state,
        incomes: state.incomes.filter(
          income => income.id !== action.payload
        ),
      };

    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          expense => expense.id !== action.payload
        ),
      };

    case 'CALCULATE_BUDGET':
      const incomeAmount = state.incomes.map(income =>
        parseFloat(income.value)
      );
      const expenseAmount = state.expenses.map(expense =>
        parseFloat(expense.value)
      );
      const totalIncome = incomeAmount.reduce(
        (acc, item) => (acc += item),
        0
      );
      const totalExpense = expenseAmount.reduce(
        (acc, item) => (acc += item),
        0
      );
      const totalBudget = totalIncome - totalExpense;
      return { ...state, totalIncome, totalExpense, totalBudget };

    default:
      return state;
  }
};

export default budgetReducer;
