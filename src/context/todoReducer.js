export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO' :
      return action.item ? [...state, action.item] : state
    case 'DONE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          const val = !todo.done
          return { ...todo, done: val }
        } else {
          return todo
        }
      })
    case 'DONE_COUNT':
      return state.filter((item) => item.done).length
    case 'AMOUNT':
      return state.length - state.filter((item) => item.done).length
    case 'MARK_TODO' :
      return state.map(todo => {
        if (todo.id === action.id) {
          const val = !todo.important
          return { ...todo, important: val }
        } else {
          return todo
        }
      })
    case 'DEL_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}
