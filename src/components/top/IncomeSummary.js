import React, { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalState';

const IncomeSummary = () => {
  const [{ totalIncome }] = useContext(GlobalContext);

  return (
    <div className="budget__income clearfix">
      <div className="budget__income--text">Income</div>
      <div className="right">
        <div className="budget__income--value">+ {totalIncome}</div>
        <div className="budget__income--percentage">&nbsp;</div>
      </div>
    </div>
  );
};

export default IncomeSummary;
