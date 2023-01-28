import React from 'react'
import AddTodo from './addNewTodo'
import TodosList from './components/TodosList'

const FirstPage = () => {
  return (
    <div>
        <AddTodo />
        <h3>Welcome Hero,</h3>
        <p>These are the things you want to do today:</p>
        <TodosList />
    </div>
  )
}

export default FirstPage