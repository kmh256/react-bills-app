import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

const DUMMY_EXPENSES= [
  {
    id: 1,
    title: 'Mortgage',
    amount: 800,
    date: (new Date(2022, 8, 1))
  },
  {
    id: 2,
    title: 'Gas & Electric',
    amount: 300,
    date: (new Date(2022, 8, 2))
  },
  {
    id: 3,
    title: 'Internet',
    amount: 30,
    date: (new Date(2022, 8, 4))
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div className="App">
      <h2>My Bills</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
