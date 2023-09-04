import ToDoItem  from "./ToDoItem"
import PropTypes from "prop-types";


function ToDoList({toDos, toggleToDo, deleteToDo}) {

    ToDoList.propTypes = {
        toDos: PropTypes.any,
        toggleToDo: PropTypes.any,
        deleteToDo: PropTypes.any
    }

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

export default ToDoList