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

    
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* For an isolated function call, we insert curly braces: */}
      { filteredExpenses.map((expense) => {
        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        })
      } 

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