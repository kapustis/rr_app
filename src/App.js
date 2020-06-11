import React from 'react';
import {Header} from './components/Header/Header'
import {SearchPanel} from "./components/SearchPanel/SearchPanel";
import {FilterItem} from "./components/FilterItem/FilterItem";
import {TodoList} from "./components/TodoList/TodoList";
import {AddItem} from "./components/AddItem/AddItem";
import {TodoState} from "./context/TodoState";
import './App.css';

function App() {
  return (
    <TodoState>
      <div className="app">
        <Header />
        <div className="search-panel d-flex">
          <SearchPanel/>
          <FilterItem/>
        </div>
        <TodoList/>
        <AddItem/>
      </div>
    </TodoState>
  );
}

export default App;
