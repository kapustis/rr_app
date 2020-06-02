import React,{useContext} from "react";
import {TodoContext} from "../../context/TodoState";
import classes from './Header.module.scss'

const Header = () =>{
  const {amount,doneCount} = useContext(TodoContext)

  const cls = [classes.Header];
  cls.push('d-flex');

  return (
    <header className={cls.join(' ')}>
      <h1>Todo List</h1>
      <h2> {amount} more to do,{doneCount} done</h2>
    </header>
  )
}

export default Header
