import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.ttle)
  // useState must be called directly in the function component. Not outside, 
  // and not nested inside another function!
  // The weird notation is array deconstruction. Cf. object deconstruction in Node.js
  // course.
  // a useState call always returns an array with 2 elements. The first is the value 
  // that was passed to useState, the second is a function by which we can change that 
  // value. We can name these items whatever we like. 
  // Executing the setTitle function will cause the component function to be executed 
  // again. This is exactly what we need.
  // useState is a React hook.
  
  const clickHandler = () => {
    // Why does 'let title = 'Updated'' not work?
    // Answer: the value would be updated, as can be seen on the console, 
    // but there is nothing that would re-execute this component function, which 
    // is required to change what we see on the page. This is where React state comes in.
    // Calling the useState function setTitle will cause a new execution of the 
    // component function.
    setTitle('Updated');
    console.log(title)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate dte = {props.dte}/>
      
      <div className="expense-item__description">
        <h2>{title}</h2> {/* Mind that it must be {title} now, 
        the first value in the array returned by the useState call. 
        If props.ttle remains, we will not see the change.*/}
        <div className="expense-item__price">${props.amt}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      {/* onClick adds an event handler. Very easy in React.
      clickHandler is just a pointer. If we'd write clickHandler() here, 
      the function would get executed when the JSX code is executed, and not when 
      the button is clicked. That would be too early*/}
    </Card>
  );
};

export default ExpenseItem;
