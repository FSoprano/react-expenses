// mport React, { useState } from 'react';
// useState import removed because 'Change Title' button was removed.
// Now a stateless, presentational or dumb component
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem = (props) => {

  // const [title, setTitle] = useState(props.ttle)
  // --> useState call for 'Change Title' button. Removed. See below.
  // Why does const work here? It's because we never assign a new value with the 
  // equals operator. We call a value-changing function. React does the 
  // value changing. This is why const works fine. React does not re-initialze the value 
  // by overwriting. It knows that the state has been initialized, and changes it 
  // under the hood.
  console.log('ExpenseItem evalutated by React');
  // useState must be called directly in the function component. Not outside, 
  // and not nested inside another function!
  // React registers the state only for the component function in which useState is called.
  // In fact, it registers it once for each INSTANCE of a component. ExpenseItem is 
  // called 4 times in Expenses.js. So each instance has its own state, which is 
  // managed independently. So only one item changes when the 'Change Title' button is 
  // clicked. The others are unaffected.
  // See the console.log call under the useState invocation; The console will report 4 
  // calls the first time the component is rendered because there are 4 items on the page.
  // When the button is clicked for one item, you'll see only 1 log message on the console.
  // The weird notation is array deconstruction. Cf. object deconstruction in Node.js
  // course.
  // a useState call always returns an array with 2 elements. The first is the value 
  // that was passed to useState, the second is a function by which we can change that 
  // value. We can name these items whatever we like. 
  // Executing the setTitle function will cause the component function to be executed 
  // again. This is exactly what we need.
  // useState is a React hook.
  
  /* const clickHandler = () => {
    // Why does 'let title = 'Updated'' not work?
    // Answer: the value would be updated, as can be seen on the console, 
    // but there is nothing that would re-execute this component function, which 
    // is required to change what we see on the page. This is where React state comes in.
    // Calling the useState function setTitle will cause a new execution of the 
    // component function.
    // Removed setTitle (Was for 'Change Title' button)
    setTitle('Updated');
    console.log(title)
    // You still see the old value (toilet paper) on the console. That's because React doesn't make 
    // the change immediately; it schedules it.
  }
  */
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      
      <div className="expense-item__description">
        <h2>{props.title}</h2> 
        {/* Mind that as long as the 'Change Title' button was still 
        active, it had to be {title} now, 
        the first value in the array returned by the useState call. 
        If props.ttle remains, we will not see the change.*/}
        <div className="expense-item__price">${props.amt}</div>
      </div>
      
      {/* <button onClick={clickHandler}>Change Title</button>
      --> Removed. Was just there for demo purposes
      onClick adds an event handler. Very easy in React.
      clickHandler is just a pointer. If we'd write clickHandler() here, 
      the function would get executed when the JSX code is executed, and not when 
      the button is clicked. That would be too early*/}
    </Card>
  );
};

export default ExpenseItem;
