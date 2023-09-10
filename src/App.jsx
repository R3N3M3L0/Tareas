import { DragDropContext, Draggable} from '@hello-pangea/dnd'

import { useEffect, useState } from "react"
import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"
const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [] 
const reorder = (list, startIndex, endIndex) => {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return (result)
}

const App = () => {
  
  const [todos, setTodos] = useState(initialStateTodos)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false 
    }
    setTodos([...todos, newTodo])
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed}: todo))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const countItemsLeft = todos.filter((todo) => !todo.completed).length
  
  const removeComplete = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const [filter, setFilter] = useState('Todo')

  const changeFilter = (filter) => setFilter(filter)

  const filteredTodos = () => {
    switch (filter){
    case 'Todo':
    return todos
    case 'Activos':
    return todos.filter((todo) => !todo.completed)
    case 'Completados':
    return todos.filter((todo) => todo.completed)
  }}  

  const handleDragEnd = (result) => {
    const {destination, source} = result
    if (!destination) return
    if (
      source.index === destination.index && 
      source.droppabledId === destination.droppabledId
    )return 

    setTodos((prevTasks) => 
      reorder(prevTasks, source.index, destination.index)
    )

  }

  return(
    <div className=" dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]  bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen dark:bg-gray-900 sm:bg-[url('./assets/images/bg-desktop-light.jpg')] sm:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <Header />  
      <main className=" container mx-auto px-4 mt-7 md:max-w-xl ">
        <TodoCreate createTodo={createTodo}/>
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList todos = {filteredTodos()} removeTodo = {removeTodo} updateTodo={updateTodo}/>
        </DragDropContext>
        <TodoComputed countItemsLeft = {countItemsLeft} removeComplete={removeComplete}/>
        <TodoFilter changeFilter={changeFilter} filter={filter}/>        
      </main>
      <footer className=" text-center mt-7 dark:text-gray-400">Drag and drop</footer>
    </div>
  )
}
export default App