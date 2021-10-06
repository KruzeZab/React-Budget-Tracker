import React, { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalState';

const AvailableBudget = () => {
  const [{ totalBudget }] = useContext(GlobalContext);
  return (
    <div className="budget__value">
      {totalBudget >= 0 ? `+ ${totalBudget}` : '+ 0'}
    </div>
  );
};

export default AvailableBudget;
