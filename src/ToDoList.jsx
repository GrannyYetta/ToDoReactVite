export default function ToDoList() {
    return (
        <ul className="list">
  {toDos.length === 0 && "No to-do's"}
  {toDos.map(toDo => {
    return (
// important reminder: add a key identifier to the top element so that React knows which part of the component 
// to modify when requested. Each child of a component has a unique key, which serves the identifying purpose.
// this is a performance optimization tool. Also, using the index is not a great idea since it is not a unique identifier and
// if deleted can mess up the functionality of the code.     
    <li key={toDo.id} >
    <label>
      {/* the onChange verifies if the to-do(inputted item) is checked or not to implement the toggleToDo funciton above */}
      <input type="checkbox" checked={toDo.completed} onChange={e => toggleToDo(toDo.id, e.target.checked)}/>
      {toDo.title}
    </label>
    <button onClick={() => deleteToDo(toDo.id)} className="btn btn-danger">Delete</button>
  </li>)
  })}
</ul>
    )
}