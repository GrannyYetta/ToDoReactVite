import { useState } from "react"
import "./styles.css"
import NewToDoForm from "./NewToDoForm"
import ToDoList from "./ToDoList"


function App() {
  // Here I am using the state to add items to a list (which is in this case an array)
  const [toDos, setToDos] = useState([])

  function addToDo(title) {
    // Now I add a to-do to the list(array)...
        setToDos((currentToDos) => {
          return [
            ...currentToDos,  
            // ...with a unique identifier (see key in the <li>) that needs to be created BEFORE it is rendered
            { id: crypto.randomUUID(),
            title,
            completed: false },
        ]
        })
  }
 
 
//  In the toggleToDo function I am updating my To-Do list(array) by changing the id of the To-Do(item)
// that I passed in the parameter to be completed with the checkbox. 
// This function is called in the onChange to the input's checkbox inside the <li></li>.
// This is absolutely relevant because STATE IS IMMUTABLE, which means I can't change the state, but rather
// create a new one. Hence, the creation of a new state object with the spread operator inside the .map function!!

function toggleToDo(id, completed) {
setToDos(currentToDos => {
  return currentToDos.map(toDo => {
    if (toDo.id ===id) {
      return {...toDo = completed}
    }
// If the id of the to-do(item) I am toggling does not match, then I want to leave it as it is. 
// So whenever I click on my to-do(item), the event listener in the onChange will trigger the 
// toggleToDo function for the particular id of that to-do(item) and my completed
// to-dos(items) will be flagged, and my list(array) will be modified
    return toDo
  })
})
}


function deleteToDo(id) {
setToDos(currentToDos => {

  // In this function I am essentially implementing a similar method as the toggleToDo one, however
  // I will use the .filter method to get a filtered version of all the to-do's (items) EXCEPT for the one I am 
  // removing.
  return currentToDos.filter(toDo => toDo.id !== id)
})
}

  return (
    <>
    <NewToDoForm onSubmit={addToDo}/>
    <h1 className="header">To-Do List</h1>
    <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  )
}

export default App
