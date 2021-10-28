import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
/* We finally want to store (add) the submitted form data to the array object in  
App.js. But how can we pass data from a child component to a parent component? Answer:
We add a props to ExpenseForm here (from the NewExpense) component. This prop takes 
a function as its value. To the function, we can pass data in parameters. Remember that we 
cannot skip components in between. That's we first have to pass the data to this 
component because it uses the ExpenseForm*/
const NewExpense = (props) => {
    // props: For an explanation, see ExpenseForm.js
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(), // this adds an ID. Math.random does not 
            // guarantee uniqueness, but it's sufficient for this task.

            ...enteredExpenseData, // all values from the object that holds the submitted 
            // ExpenseForm data.
                    };
        props.onAddExpense(expenseData); // Same principle as in ExpenseForm.js.
        // we're chaining up here to pass the newly entered submit data further upwards to 
        // App.js. To see that it works: Start app, open the inspector and check 
        // the console. It logs the data and says it's from App.js.
    };
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        {/* <form> moved outta here to a component of its own (ExpenseForm). */}
    </div>
};
export default NewExpense;