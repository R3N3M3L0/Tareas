const TodoFilter = ({changeFilter, filter}) => {
    return(
        <section className="container mx-auto mt-4 ">
            <div className="bg-white p-4 rounded-md flex justify-center gap-4 dark:bg-gray-800 ">
                <button onClick={() => changeFilter('Todo')} className={`${filter === 'Todo' ? 'text-blue-500': 'text-gray-400'}`}>Todo</button>
                <button onClick={() => changeFilter('Activos')} className={`${filter === 'Activos' ? 'text-blue-500': 'text-gray-400'}`}>Activos</button>
                <button onClick={() => changeFilter('Completados')} className={`${filter === 'Completados' ? 'text-blue-500': 'text-gray-400'}`} >Completados</button>
            </div>
        </section> 
    )
}
export default TodoFilter