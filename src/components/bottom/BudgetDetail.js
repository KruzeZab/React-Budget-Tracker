import React from 'react';
import BudgetInput from './BudgetInput';
import ExpenseList from './ExpenseList';
import IncomeList from './IncomeList';

const BudgetDetail = () => {
  return (
    <div className="bottom">
      <BudgetInput />
      <div className="container clearfix">
        <IncomeList />
        <ExpenseList />
      </div>
    </div>
  );
};

export default BudgetDetail;
