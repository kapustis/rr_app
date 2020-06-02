import React, {useContext, useState} from "react";
import {TodoContext} from "../../context/TodoState";
import './AddItem.css'

export const AddItem = () => {
  const {addHandler} = useContext(TodoContext)
  const [newTodo, setNewTodo] = useState("");

  const handleAddClick = () => {
    if (!newTodo) return;
    addHandler(newTodo);
    setNewTodo("")
  }

  const onEnter = event => {
      if (event.key !== 'Enter'){
        return
      }
      handleAddClick()
  }

  return (
    <div className="bottom-panel d-flex">
      <input className="form-control new-todo-label"
             placeholder=" Печатать тут"
             value={newTodo}
             onChange={event => setNewTodo(event.target.value)}
             onKeyPress={onEnter}
      />
      <button className="btn btn-outline-secondary"
              type="button"
              onClick={handleAddClick}
      >Add
      </button>
    </div>
  )
}
