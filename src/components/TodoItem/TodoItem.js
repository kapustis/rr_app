import React from "react";
import classes from './Item.module.scss'

const TodoItem = ({todo, onDelete,onDone, onMark}) => {
  const cls = [classes.ItemLabel];

  if (todo.important) cls.push(classes.Important);
  if (todo.done) cls.push(classes.Done);

  return (
    <div className={classes.Item}>
      <span className={cls.join(' ')}
           onClick={onDone}
      >{todo.label}</span>
      <button className="btn btn-outline-danger btn-sm float-right"
              type='button' onClick={onDelete}>
        <i className="fa fa-trash-o"/>
      </button>
      <button className="btn btn-outline-success btn-sm float-right"
              type='button' onClick={onMark}>
        <i className="fa fa-exclamation"/>
      </button>
    </div>
  )
}

export default TodoItem
