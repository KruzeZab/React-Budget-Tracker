import React, { createContext, useReducer } from 'react';
import budgetReducer from '../reducers/budgetReducer';

const initialState = {
  incomes: [],
  expenses: [],
  totalBudget: 0,
  totalIncome: 0,
  totalExpense: 0,
};

const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const store = React.useMemo(() => [state, dispatch], [state]);

  return (
    <GlobalContext.Provider value={store}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
