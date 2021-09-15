import React from 'react';
import './ExpenseItem.css';
import ExpanseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpanseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpanseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpanseItem;
