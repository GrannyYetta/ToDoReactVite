

export function ToDoItem({completed, id, title, toggleToDo, deleteToDo}) {
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