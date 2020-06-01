import React, {useReducer} from "react";
import {todoReducer} from "./todoReducer";
import {TodoContext} from "./todoContext"

export const TodoState = ({children}) => {
  const initialState = [
    {id: 1, label: 'Drink Coffee', important: false, done: false},
    {id: 2, label: 'Learn React', important: true, done: false},
    {id: 3, label: 'Make Awesome App', important: false, done: true}
  ];

  const [state, dispatch] = useReducer(todoReducer, initialState);

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
      state, doneCount, amount, delHandler, markHandler, doneHandler
    }}>
      {children}
    </TodoContext.Provider>
  )
}
