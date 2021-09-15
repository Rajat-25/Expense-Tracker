import React, { useState } from 'react';
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart'
import './Expenses.css';
import Card from '../UI/Card';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
