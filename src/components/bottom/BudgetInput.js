import React, { useState, useContext, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GlobalContext from '../../contexts/GlobalState';

const initialValues = {
  type: 'inc',
  desc: '',
  value: 0,
};

const BudgetInput = () => {
  const [inputValues, setInputValues] = useState(initialValues);
  const [{ totalIncome, totalExpense }, dispatch] =
    useContext(GlobalContext);
  const inputRef = useRef(null);

  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValues.type === 'inc') {
      dispatch({
        type: 'ADD_INCOME',
        payload: { ...inputValues, id: uuidv4() },
      });
    } else if (inputValues.type === 'exp') {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: { ...inputValues, id: uuidv4() },
      });
    }
    dispatch({ type: 'CALCULATE_BUDGET' });
    setInputValues(initialValues);
    inputRef.current.focus();
  };

  return (
    <div className="add">
      <div className="add__container">
        <form onSubmit={handleSubmit}>
          <select
            className="add__type"
            value={inputValues.type}
            onChange={handleChange}
            name="type"
          >
            <option value="inc">+</option>
            <option value="exp">-</option>
          </select>

          <input
            type="text"
            ref={inputRef}
            className="add__description"
            placeholder="Add description"
            name="desc"
            value={inputValues.desc}
            onChange={handleChange}
            required
            autoFocus
          />
          <input
            type="number"
            className="add__value"
            placeholder="Value"
            name="value"
            value={inputValues.value}
            onChange={handleChange}
            required
          />
          <button className="add__btn">
            <i className="ion-ios-checkmark-outline" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default BudgetInput;
