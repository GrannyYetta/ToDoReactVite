import { useState } from "react";
import PropTypes from "prop-types";



function NewToDoForm({ onSubmit }) {
      // Here I am using state to add an item

  const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return 
        
        onSubmit(newItem)

      // The following function will ensure that the input area gets cleared after submitting a to-do(item)
        setNewItem("")
       }

       NewToDoForm.propTypes = {
        onSubmit: PropTypes.any
    }
    return (
        <form onSubmit={handleSubmit} className="new-item-form" >
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
            </div>
            <button className="btn">Add</button>
        </form> 
    )
}

export default NewToDoForm
