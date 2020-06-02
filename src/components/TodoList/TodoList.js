import React,{useContext} from "react";
import {TodoContext} from "../../context/TodoState";
import './TodoList.css'
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const {todos,delHandler,markHandler,doneHandler} = useContext(TodoContext);

  if (!todos.length) return (<h1>gdg</h1>);

  return (
    <ul className="todo-list list-group">
      {
        todos.map((item) => {
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
