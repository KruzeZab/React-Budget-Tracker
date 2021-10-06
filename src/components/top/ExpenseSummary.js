import React, { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalState';

const ExpenseSummary = () => {
  const [{ totalExpense }] = useContext(GlobalContext);

  return (
    <div className="budget__expenses clearfix">
      <div className="budget__expenses--text">Expenses</div>
      <div className="right clearfix">
        <div className="budget__expenses--value">
          - {totalExpense}
        </div>
        <div className="budget__income--percentage">&nbsp;</div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
