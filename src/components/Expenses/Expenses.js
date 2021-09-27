import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";
const Expenses = () => {
    const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <Card className="expenses">
      <h2>Let's get started!</h2>
      <ExpenseItem
        ttle={expenses[0].title}
        amt={expenses[0].amount}
        dte={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        ttle={expenses[1].title}
        amt={expenses[1].amount}
        dte={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        ttle={expenses[2].title}
        amt={expenses[2].amount}
        dte={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        ttle={expenses[3].title}
        amt={expenses[3].amount}
        dte={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
};
export default Expenses;