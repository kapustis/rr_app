import React from "react";
import './TodoList.css'
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({todo,Del,Done, Mark}) => {

  if (!todo.length) return (<h1>gdg</h1>);

  return (
    <ul className="todo-list list-group">
      {
        todo.map((item, index) => {
          return (
            <li key={index} className="list-group-item">
              <TodoItem
                todo={item}
                onDelete={() => Del(index)}
                onDone={() => Done(item.id)}
                onMark={() => Mark(index)}
              />
            </li>
          );
        })
      }
    </ul>
  )
}

export default TodoList
