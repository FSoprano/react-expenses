
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = props => {
    // filteredExpenses does not exist here. Swapping with props.items.
   if (props.items.length === 0) {
     return <p className="expenses-list__fallback">No expense item found.</p>
   }
   return <ul className="expenses-list">
       { props.items.map((expense) => {
      return <ExpenseItem 
        key={expense.id} 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} />
      }) }
   </ul>
}

export default ExpensesList;