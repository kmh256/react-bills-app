import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    setIsEditing(!isEditing);
  }

  const toggleEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className= "new-expense">
      {!isEditing &&
        <button type="button"
          onClick={toggleEditingHandler}>
          Add New Expense
        </button>
      }
      {isEditing &&
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleEditingHandler}
        />
      }
    </div>
  )
};

export default NewExpense;