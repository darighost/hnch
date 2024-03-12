import { useQuery, gql } from '@apollo/client'
import React from 'react'
import TodoItem from './TodoItem'

export const ALL_TODOS = gql`
  query allTodos {
    allTodos {
      id
      title
      completed
    }
  }
`

const Todos = () => {
  const { loading, error, data } = useQuery(ALL_TODOS)
  if (loading)
    return (
      <div className="todos-container">
        <p className="loading">Loading...</p>
      </div>
    )
  if (error) return <p className="loading-error">Error :(</p>
  return (
    <ul className="todo-list">
      {data.allTodos.map((todo) => (
        <div class='post-container'><span class='post-id'>{todo.id}.</span><TodoItem todo={todo} key={todo.id} /></div>
      )).reverse()}
    </ul>
  )
}

export default Todos
