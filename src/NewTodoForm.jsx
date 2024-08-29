import { useState } from "react"


export function NewTodoForm(props)  {
    props.onSubmit
    const [newItem, setNewItem] = useState(" ")
    //setNewItem("asdsadsa") // we cant set it like this because it will be infinite loop

    function handleSubmit(e) {
        e.preventDefault()   //prevent my page from refreshing
        
        if(newItem === "") return
        props.onSubmit(newItem)
    
     setNewItem("")  // it clears out the prev. text after you hit the add button
     }
    
     return  ( 
        
      <form onSubmit={handleSubmit} className="new-item-form">
        
        <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem}  // here we set the default value to newItem
        onChange={e => setNewItem(e.target.value)}   // here we updating whenever we give new value
        type ="text" 
        id="item" />
        </div>   
    
    <button className="btn">Add</button>
    </form>
    )
}