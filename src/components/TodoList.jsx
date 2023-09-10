import TodoItem from './TodoItem'
import Empty from './Empty'
const TodoList = ({todos, removeTodo, updateTodo}) => {
  
    return(
        
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-4 overflow-hidden   dark:bg-black ">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo = {todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
          ))} 
          {
            todos.length === 0 && <Empty/>
          }         
        </div>
    )
}
export default TodoList