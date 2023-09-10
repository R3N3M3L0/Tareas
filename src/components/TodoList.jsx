import {Droppable, Draggable} from '@hello-pangea/dnd'
import TodoItem from './TodoItem'
import Empty from './Empty'
const TodoList = ({todos, removeTodo, updateTodo}) => {
  
    return(
        <Droppable droppableId = 'todos'>
          {
            (droppableProvided) => (
              <div 
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
                className="bg-white rounded-t-md [&>article]:p-4 mt-4 overflow-hidden   dark:bg-gray-950">
              {
                todos.map((todo, index) => (
                  <Draggable key={todo.id} index = {index}draggableId={`${todo.id}`}
                  >
                    {
                      (draggableProvided) => (
                        <TodoItem 
                          todo = {todo} 
                          removeTodo={removeTodo} 
                          updateTodo={updateTodo}
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.dragHandleProps}
                          {...draggableProvided.draggableProps}
                        />
                      )
                    }
                    
                  </Draggable>
                ))
              }
              {
                droppableProvided.placeholder
              } 
              {
                todos.length === 0 && <Empty/>
              }         
              </div>
            )
          }
          
        </Droppable>
    )
}
export default TodoList