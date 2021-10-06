import React, { useContext } from 'react';

import SingleIncome from './SingleIncome';
import GlobalContext from '../../contexts/GlobalState';

const IncomeList = () => {
  const [{ incomes }, dispatch] = useContext(GlobalContext);
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        {incomes.map(income => (
          <SingleIncome key={income.id} {...income} />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
