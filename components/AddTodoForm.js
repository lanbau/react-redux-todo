import React from 'react'
// this is passed to AddTodoForm

// where is this onSubmit from?
// containers/AddTodo.js
let AddTodoForm = ( { onSubmit } ) => {
  // if you pass ( onSubmit ), onSubmit becomes an object
  // when you use ( { onSubmit })
  // it destructures into
  // function onSubmit(text) {
  //  dispatch((0, _actions.addTodo)(text));
  // }
  console.log(onSubmit)

  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()

        // this is true when empty string
        // false when there is value WTF
        console.log(!input.value.trim())
        if (!input.value.trim()) {
          return
        }
        onSubmit(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          console.log(node)
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodoForm
