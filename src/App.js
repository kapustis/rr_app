import React from 'react';
import Header from './components/Header/Header'
import TodoList from "./components/TodoList/TodoList";
import {AddItem} from "./components/AddItem/AddItem";
import {TodoState} from "./context/TodoState";
import './App.css';

function App() {
  return (
    <TodoState>
      <div className="app">
        <Header />
        <TodoList/>
        <AddItem/>
      </div>
    </TodoState>
  );
}

export default App;
