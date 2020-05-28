import React from "react";

export const AddItem = () => {

  return (
    <form className="bottom-panel d-flex">
      <input className="form-control new-todo-label" placeholder=" Печатать тут "/>
      <button  className="btn btn-outline-secondary" type="button" >Add</button>
    </form>
  )
}
