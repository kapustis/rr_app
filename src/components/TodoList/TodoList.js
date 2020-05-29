import React from "react";
import './TodoList.css'
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({todo,Del,Done, Mark}) => {

  if (!todo.length) return (<h1>gdg</h1>);

  return (
    <ul className="todo-list list-group">
      {
        todo.map((item) => {
          return (
            <li key={item.id} className="list-group-item">
              <TodoItem
                todo={item}
                onDelete={() => Del(item.id)}
                onDone={() => Done(item.id)}
                onMark={() => Mark(item.id)}
              />
            </li>
          );
        })
      }
    </ul>
  )
}

export default TodoList
