import PropTypes from "prop-types";

function ToDoItem({completed, id, title, toggleToDo, deleteToDo}) {

   ToDoItem.propTypes = {
        completed: PropTypes.any,
        id: PropTypes.any,
        toggleToDo: PropTypes.any,
        title: PropTypes.any,
        deleteToDo: PropTypes.any
    }
    return (
        <li >
            <label>
                {/* the onChange verifies if the to-do(inputted item) is checked or not to implement the toggleToDo funciton above */}
                 <input type="checkbox" checked={completed} 
                    onChange={e => toggleToDo(id, e.target.checked)}
                    />
                    {title}
            </label>
                        <button 
                        onClick={() => deleteToDo(id)} 
                        className="btn btn-danger">Delete</button>
                 </li>
    )
}

export default ToDoItem