import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import "./Expenses.css";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
      return filteredYear === expense.date.getFullYear().toString();
      }
    );

   let expensesContent = <p class="alert">No expense item found.</p>;

   if (filteredExpenses.length > 0) {
     expensesContent = filteredExpenses.map((expense) => {
      return <ExpenseItem 
        key={expense.id} 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} />
      });
   }

    
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* For an isolated function call, we insert curly braces: */}
      {/* Good old terny ternary operator here. if-conditions wouldn't do Max said.
      And neither would loops: */}
      {/* filteredExpenses.length === 0 ? <p class="alert">No expense item found.</p> :
        filteredExpenses.map((expense) => {
        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        })
      */} 
      {/* Getting rid of the messy code above. Two alternatives: */}
      {/* Alternative 1: Exploiting the fact that Javascript renders  
      the second part after the && when the first part returns true.
      We end up with two code expressions. Still messy though. */}
      {/* {filteredExpenses.length === 0 && <p class="alert">No expense item found.</p> }
      { filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        })} */}
      {/* Which leads us to alternative 2: */}
      { expensesContent }
      {/* For the logic, check the part above the return() call. */}
      {/* This here can go:
      <ExpenseItem
        ttle={props.items[0].title}
        amt={props.items[0].amount}
        dte={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        ttle={props.items[1].title}
        amt={props.items[1].amount}
        dte={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        ttle={props.items[2].title}
        amt={props.items[2].amount}
        dte={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        ttle={props.items[3].title}
        amt={props.items[3].amount}
        dte={props.items[3].date}
      ></ExpenseItem>
      */}
    </Card>
  );
};
export default Expenses;