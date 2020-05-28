import React, {useState} from 'react';
import Header from './components/Header/Header'
import TodoList from "./components/TodoList/TodoList";
import {AddItem} from "./components/AddItem/AddItem";
import './App.css';

function App() {
  const TodoData = [
    { id: 1, label: 'Drink Coffee', important: false, done: false },
    { id: 2, label: 'Learn React', important: true, done: false },
    { id: 3, label: 'Make Awesome App', important: false, done: true }
  ];

  const [todo, setTodo] = useState(TodoData);
  const delHandler = (index) => {
    setTodo(todo => todo.filter((item, i) => i !== index))
  }
  const markHandler = (index) => {
    let newArr = [...todo];
    let edItem = newArr[index];
    edItem.important = !edItem.important;
    newArr[index] = edItem;
    setTodo(newArr);
  }
  const doneHandler = (id) => {
    const done = !todo.find(t => t.id === id).done;
    console.log(done);
  }

  const doneCount = todo.filter((item) => item.done).length;
  const amount = todo.length - doneCount;
  return (
    <div className="app">
      <Header doneCount={doneCount} amount={amount} />
      <TodoList todo={todo} Del={delHandler} Mark={markHandler} Done={doneHandler}/>
      <AddItem/>
    </div>
  );
}

export default App;
