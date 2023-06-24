import React from "react";
import Expense from "./components/Expense/Expense";

// Arrow function syntax
const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 900,
            date: new Date(2021, 5, 12),
        },
    ];
    // return (
    //     <div>
    //         <h2>Let's get started!</h2>
    //         <Expense expenses = {expenses}/>
    //     </div>
    // );

    return React.createElement(
        'div',
        {},
        React.createElement('h2', {}, `Let's get started!`),
        React.createElement(Expense, { expenses: expenses }
    ));
}

export default App;