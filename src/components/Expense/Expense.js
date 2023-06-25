import React from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';

export default function Expense(props) {

    const [filterYear, setFilterYear] = React.useState('2020');

    function filterCheck(expense) {
        // console.log(expense.date.getFullYear());
        return (expense.date.getFullYear() == filterYear);
    }
    function filterChangeHandler(selectedYear) {
        setFilterYear(selectedYear);
    }
    const filteredExpenses = props.expenses.filter(filterCheck);

    let expensesContent = <p>No expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((item) => (
            <ExpenseItem key={item.id} expense={item} />
        ));
    }
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
            {expensesContent}
        </Card>
    );
}