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
    
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
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
    </Card>
  );
};
export default Expenses;