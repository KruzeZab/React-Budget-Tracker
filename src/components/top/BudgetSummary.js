import React from 'react';
import AvailableBudget from './AvailableBudget';
import BudgetTitle from './BudgetTitle';
import ExpenseSummary from './ExpenseSummary';
import IncomeSummary from './IncomeSummary';

const BudgetSummary = () => {
  return (
    <div className="top">
      <div className="budget">
        <BudgetTitle />
        <AvailableBudget />
        <IncomeSummary />
        <ExpenseSummary />
      </div>
    </div>
  );
};

export default BudgetSummary;
