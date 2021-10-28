import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    // we will pass in a prop from NewExpense (the onSaveExpenseData prop) to make 
    // the function it's set to available here. That's why we need to add props as 
    // a parameter. See the submitHandler function.
    const [enteredTitle, setEnteredTitle] = useState('');
    // You can have different states. These are independent of each other.
    const [enteredAmount, setEnteredAmount] = useState('');
    // the event.target.value is always a string, even if it is a number, it will 
    // be a number as a string. That's why all these states are initialized with an 
    // empty string.
    const [enteredDate, setEnteredDate] = useState('');

    // An alternative way: use a single state object for all 3 values:
    // const [userInput, setUserInput] = useState({
    //    enteredTitle: '',
    //    enteredAmount: '',
    //    enteredDate: '',
    // });
    
    const titleChangeHandler = (event) => {
        // event is a default object we have access to when an event handler is added.
        // Show this object on the console:
        // console.log(event);
        // Show the currently entered title value on the console:
        
        // We run the function to change the state value on this target:
        setEnteredTitle(event.target.value); // so what the user entered becomes 
        // the new state. As we know, the state change causes a new execution of 
        // the component function to make the change visible in the UI.
        // alternative way:
        /* setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        }); */
        // The alternative requires us to set all 3 values. This is why we have 
        // to use the spread operator to read in all keys. The enteredTitle then gets 
        // overwritten. If we would just set the changed key value pair, the others 
        // would get lost.
        // However, this is not ideal; when many state values are updated, React might work 
        // on an outdated version of the previous state object. The safer way to do this is by calling a function:
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value }
        // });
        // Whenever we use a function inside, we get access to the previous state object.
        // This will always be the latest version of this object.

    };
    const amountChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredAmount(event.target.value);
        
        // Alternative way:
        /* setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        }); */
        // However, this is not ideal; when many state values are updated, React might work 
        // on an outdated version of the previous state object. The safer way to do this is by calling a function.
        // Whenever the previous state is needed, do it like this:
        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value }
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // Alternative way:
        /* setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        }); */
        // However, this is not ideal; when many state values are updated, React might work 
        // on an outdated version of the previous state object. The safer way to do this is by calling a function:
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value }
        // });
    };
    // console.log(userInput);
    const submitHandler = (event) => {
        event.preventDefault(); // We don't want to reload the entire page, which is
        // what would happen by default. This is a Javascript function; it's got 
        // nothing to do with React.
        // We need a reusable object to hold all the entered values once the form 
        // is submitted:
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(expenseData);
        // Here we use the function in NewExpense.js (onSaveExpenseDataHandler) by passing our submitted data as 
        // an object parameter to onSaveExpenseData prop. 
        // We can 'execute' the prop here because the value it resolves to is a function. 
        // This is the trick on how we can pass data upwards, from a child to a parent 
        // component.
        // To check out that it works: Start the app and open the inspector. The submitted 
        // data object is now logged on the console. The log entry says it's from line 12
        // of NewExpense.js. And the object has an ID (the random value).
    };
    
    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                {/* onChange adds event handler 
                2-way-binding: The value the user entered is set as the value 
                property of the input element. The submitHandler functions can 
                then reset the values to an empty string, so that all 
                input fields are cleared. */}
                <label>Title</label>
            </div>
            <div className="new-expense__control">
                <input value={enteredAmount} onChange={amountChangeHandler} type="number" min="0.01" step="0.01"/>
                <label>Amount</label>
            </div>
            <div className="new-expense__control">
                <input value={enteredDate} onChange={dateChangeHandler} type="date" min="2021-10-11" max="2023-12-31"/>
                {/* Gives us a date picker */}
                <label>Date</label>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>);
};
export default ExpenseForm;