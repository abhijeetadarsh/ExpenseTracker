import Card from '../UI/Card';
import './Expense.css';
import ExpenseItem from "./ExpenseItem";

export default function Expense(props) {
    const newExpenses = props.expenses;
    return (
        <Card className='expenses'>
            {newExpenses.map((item, index) => (
                <ExpenseItem
                    key = {index}
                    expense = {item}
                />
            ))}
        </Card>
    );
}