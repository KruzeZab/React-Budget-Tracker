import React, { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalState';

const SingleIncome = ({ id, desc, value }) => {
  const [, dispatch] = useContext(GlobalContext);

  const deleteItem = () => {
    dispatch({ type: 'DELETE_INCOME', payload: id });
    dispatch({ type: 'CALCULATE_BUDGET' });
  };

  return (
    <div className="item clearfix" id={`income-${id}`}>
      <div className="item__description">{desc}</div>
      <div className="right clearfix">
        <div className="item__value">+ {value}</div>
        <div className="item__delete">
          <button className="item__delete--btn" onClick={deleteItem}>
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleIncome;
