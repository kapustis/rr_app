import React, {useReducer} from 'react';
import Header from './components/Header/Header'
import TodoList from "./components/TodoList/TodoList";
import {AddItem} from "./components/AddItem/AddItem";
import './App.css';

const initialTodos = [
  {id: 1, label: 'Drink Coffee', important: false, done: false},
  {id: 2, label: 'Learn React', important: true, done: false},
  {id: 3, label: 'Make Awesome App', important: false, done: true}
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DONE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          const val = !todo.done
          return {...todo, done: val};
        } else {
          return todo;
        }
      });
    case  'MARK_TODO' :
      return state.map(todo => {
        if (todo.id === action.id) {
          const val = !todo.important
          return {...todo, important: val};
        } else {
          return todo;
        }
      });
    case 'DEL_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer,initialTodos);

  const delHandler = (id) => {
    dispatch({type: 'DEL_TODO',id:id})
  }
  const markHandler = (id) => {
    dispatch({type: 'MARK_TODO',id:id})
  }
  const doneHandler = (id) => {
    dispatch({type: 'DONE_TODO', id: id})
  }

  const doneCount = todos.filter((item) => item.done).length;
  const amount = todos.length - doneCount;
  return (
    <div className="app">
      <Header doneCount={doneCount} amount={amount}/>
      <TodoList todo={todos} Del={delHandler} Mark={markHandler} Done={doneHandler}/>
      <AddItem/>
    </div>
  );
}

export default App;
