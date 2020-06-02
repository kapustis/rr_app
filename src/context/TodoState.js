import React, {useEffect, useReducer, useState} from "react";
import {todoReducer} from "./todoReducer";

export const TodoContext = React.createContext();
export const TodoState = ({children}) => {
  const initialState = [
    {id: 1, label: 'Drink Coffee', important: false, done: false},
    {id: 2, label: 'Learn React', important: true, done: false},
    {id: 3, label: 'Make Awesome App', important: false, done: true},
    {id: 4, label: 'Lake Awesome App', important: false, done: true},
    {id: 5, label: 'Drink tea', important: false, done: true},
  ];

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todos,setTodos] = useState('')

  useEffect(() =>{
    setTodos(state)
  },[state])

  const searchHandler = (search) => {
    const results = state.filter((todo) => {
      return todo.label.toLowerCase().includes(search.toLowerCase())
    })
    setTodos(results)
  }
  const addHandler = (label) => {
    const item = {id: state.length + 1, label: label, important: false, done: false}
    dispatch({type: 'ADD_TODO', item})
  }
  const delHandler = (id) => {
    dispatch({type: 'DEL_TODO', id: id})
  }
  const markHandler = (id) => {
    dispatch({type: 'MARK_TODO', id: id})
  }
  const doneHandler = (id) => {
    dispatch({type: 'DONE_TODO', id: id})
  }


  const doneCount = state.filter((item) => item.done).length;
  const amount = state.length - doneCount;

  return (
    <TodoContext.Provider value={{
      todos, doneCount, amount,
      addHandler, searchHandler, delHandler, markHandler, doneHandler
    }}>
      {children}
    </TodoContext.Provider>
  )
}

