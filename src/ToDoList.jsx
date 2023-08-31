import ToDoItem  from "./ToDoItem"



export function ToDoList({toDos, toggleToDo, deleteToDo}) {
    return (
        <ul className="list">
            {toDos.length === 0 && "No to-do's"}
            {toDos.map(toDo => {
            return <ToDoItem 
                    {...toDo} key={toDo.id} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
                 })}
        </ul>
    )
}