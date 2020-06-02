import React, {useContext, useEffect, useState} from "react";
import './search-panel.css'
import {TodoContext} from "../../context/TodoState";

export const SearchPanel = () => {
  const {searchHandler} = useContext(TodoContext)
  const [search, setSearch] = useState("");

  useEffect(() =>{
    searchHandler(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search])

  return (
    <input type="text"
           className="form-control search-input"
           placeholder="Search"
           value={search}
           onChange={event => setSearch(event.target.value)}
    />
  )
}
