import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    // let title = props.expense.title;
    // const [title, setTitle] = useState(props.expense.title);

    // function clickHandler() {
    //     // title = "Changed!";
    //     setTitle("Gullu donkey hai!");
    //     console.log(title);
    // }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.expense.date}/>
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className='expense-item__price'>${props.expense.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>buttom hai</button> */}
        </Card>
    );
}


export default ExpenseItem;