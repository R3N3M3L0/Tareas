const TodoComputed = ({countItemsLeft, removeComplete}) => {
    return(
        <section className="dark:bg-gray-800 py-4 px-4 flex justify-between bg-white rounded-b-md ">
            <span className="text-gray-400">{countItemsLeft} item restantes </span>
            <button onClick={removeComplete} className="text-gray-400">Limpiar completados</button>
        </section>
    )
}
export default TodoComputed