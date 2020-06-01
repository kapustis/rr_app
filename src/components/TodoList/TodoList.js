import React,{useContext} from "react";
import {TodoContext} from "../../context/todoContext";
import './TodoList.css'
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const {state,delHandler,markHandler,doneHandler} = useContext(TodoContext)

  if (!state.length) return (<h1>gdg</h1>);

  return (
    <ul className="todo-list list-group">
      {
        state.map((item) => {
          return (
            <li key={item.id} className="list-group-item">

              <TodoItem
                todo={item}
                onDelete={() => delHandler(item.id)}
                onDone={() => doneHandler(item.id)}
                onMark={() => markHandler(item.id)}
              />
            </li>
          );
        })
      }
    </ul>
  )
}

export default TodoList
