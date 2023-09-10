
import CrossIcon from './icons/CrossIcon'
import CheckIcon from './icons/CheckIcon'
import React from 'react'
const TodoItem = React.forwardRef(({todo, removeTodo, updateTodo, ...props}, ref) => {

    const {id, title, completed} = todo

    return(
        
        <article {...props} ref={ref} className="bg-white dark:bg-gray-800 flex gap-4  border-b-gray-300 border-b-2  dark:border-b-gray-950 ">
            <button onClick={() => updateTodo(id)} className={`${completed ? "rounded-full border-2 w-5 h-5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center": "rounded-full border-2 w-5 h-5 inline-block flex-none"}`} >{completed && <CheckIcon/>}</button>
            <p className={`text-gray-400 grow ${completed ? "line-through":"text-black"}`}>{title}</p>
            <button onClick={() => removeTodo(id)} className="flex"><CrossIcon></CrossIcon></button>
        </article>
        
    )
})
export default TodoItem