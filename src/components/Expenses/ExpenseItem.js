import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
  
  return (
    <Card className="expense-item">
      <ExpenseDate dte = {props.dte}/>
      
      <div className="expense-item__description">
        <h2>{props.ttle}</h2>
        <div className="expense-item__price">${props.amt}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
