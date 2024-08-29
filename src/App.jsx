import "./styles.css"
import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
const [todos, setTodos] = useState(() => {
  const localValue = localStorage.getItem("ITEMS")
  if(localValue == null) return []
  
  return JSON.parse(localValue)
})

useEffect(() => {    // takes function as an argument
localStorage.setItem("ITEMS", JSON.stringify(todos))
}, [todos])  // anytime todos change we call this function


function addTodo(title) {
  
  setTodos(currentTodos => {    //everytime if we want to use cuurentvalue then we have to pass in inside a function
    return [
    ...currentTodos, 
    { id: crypto.randomUUID(), title, completed: false },
  ]
})
}

function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed}
      }

      return todo
    })
  })
}

function deleteTodo(id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}


 return (
<>

<NewTodoForm onSubmit={addTodo}/>    {/* we have made tthe component called NewTodoForm and passing it here */}
{/* here we pass a prop called onSubmit */}

<h1 className="header">TODO LIST</h1>
<TodoList todos={todos} 
toggleTodo={toggleTodo} 
deleteTodo={deleteTodo} />
</>
 )
}
