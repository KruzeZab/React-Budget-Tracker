import React from 'react';
import { GlobalProvider } from '../contexts/GlobalState';
import BudgetDetail from './bottom/BudgetDetail';
import BudgetSummary from './top/BudgetSummary';

const App = () => {
  return (
    <GlobalProvider>
      <BudgetSummary />
      <BudgetDetail />
    </GlobalProvider>
  );
};

export default App;
