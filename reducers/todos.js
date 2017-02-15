// REDUCERS matches each action name
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      // Only 1 item is passed.. look at below todos
      if (state.id !== action.id) {
        return state
      }
      // first argument {} is target
      // second and third is combined.. third overrides completed attribute
      return Object.assign(
        {},
        state,
        {
          completed: !state.completed
        }
      )
    default:
      return state
  }
}
// todos use todo in itself...
// export todos only
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // console.log([
      //   ...state,
      //   todo(undefined, action)
      // ])
      // [Object, Object]
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      // loop thru all items
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
