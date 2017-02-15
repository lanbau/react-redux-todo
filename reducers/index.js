import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// Reducer functions are called by the “Container” containers when there is a user action.

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
