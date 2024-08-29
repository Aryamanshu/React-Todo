import React from "react"
import { TodoItem } from "./TodoItem"

export  function TodoList({ todos, toggleTodo, deleteTodo }) {

return (

<ul className="list">

  {todos.length === 0 && "No Todos"}      {/* this is called short circuiting in js , here we are checking there is any todo or not if not then it will display No Todos" */}
  
  {todos.map(todo => {  // whenever you are returning array of elements in react , each element at top level should have the key property
    return (
        <TodoItem
        {...todo}   //passsing all props
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        key={todo.id}   // because we r rendering this insided of an array
        />
    )
  })}
</ul>
)
}