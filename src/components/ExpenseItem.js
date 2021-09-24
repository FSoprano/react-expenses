import './ExpenseItem.css';
function ExpenseItem(props) {
  return (
    <div className="expense-item">
        {/* expenseDate is an object;
        you cannot display it just like that 
        like a string */}
      <div>{props.dte.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.ttle}</h2>
        <div className="expense-item__price">${props.amt}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
