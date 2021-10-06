import React, { useContext } from 'react';
import SingleExpense from './SingleExpense';
import GlobalContext from '../../contexts/GlobalState';

const ExpenseList = () => {
  const [{ expenses }, dispatch] = useContext(GlobalContext);
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        {expenses.map((expense, index) => (
          <SingleExpense key={index} {...expense} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
