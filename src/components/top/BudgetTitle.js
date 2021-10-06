import React from 'react';

const BudgetTitle = () => {
  return (
    <div className="budget__title">
      Available Budget in
      <span className="budget__title--month">
        &nbsp;
        {new Date().toLocaleString('default', { month: 'long' })}
      </span>
      :
    </div>
  );
};

export default BudgetTitle;
