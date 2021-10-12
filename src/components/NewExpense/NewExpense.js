import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = () => {
    return <div className="new-expense">
        <ExpenseForm />
        {/* <form> moved outta here to a component of its own (ExpenseForm). */}
    </div>
};
export default NewExpense;