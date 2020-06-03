import React, {useContext, useEffect, useState} from "react";
import {TodoContext} from "../../context/TodoState";

export const FilterItem = () => {
  const {filterTodo} = useContext(TodoContext)
  const [filter, setFilter] = useState("all");
  const activeFilter = 'btn btn-info';
  const notActiveFilter = 'btn btn-outline-secondary';

  useEffect(() => {
    filterTodo(filter)
    console.log(filter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])
  return (
    <div className="btn-group">
      <button type="button"
              className={filter === 'all' ? activeFilter : notActiveFilter }
              onClick={() => setFilter('all')}
      >all</button>
      <button type="button"
              className={filter === 'active' ? activeFilter : notActiveFilter }
              onClick={() => setFilter('active')}
      >active</button>
      <button type="button"
              className={filter === 'done' ? activeFilter : notActiveFilter }
              onClick={() => setFilter('done')}
      >done</button>
    </div>
  )
}
