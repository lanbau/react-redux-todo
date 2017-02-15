import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      // loop thru & show only completed items
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
    // loop thru & show only non completed items
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  console.log('this is state: ')
  console.log(state)
  // state is {
  //   todo: [],
  //   visibilityFilter: true/false
  // }
  return {
    // Call above function
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

//  Purpose is to Inject State & Actions

//https://github.com/reactjs/react-redux/blob/master/docs/api.md#inject-todos-and-all-action-creators-addtodo-completetodo--as-actions
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
