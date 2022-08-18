import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();

  return (
    <div className="expenseDate">
      <div className="expenseDate__day">{day}</div>
      <div className="expenseDate__month">{month}</div>
      <div className="expenseDate__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;