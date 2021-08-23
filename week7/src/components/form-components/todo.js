import { useState } from 'react';
import  TodoForm from './TodoForm';

function Todo ({todo, completeTodo, deleteTodo, editTodo}) {
    console.log(todo._id)
    const [editing, setEditing] = useState(false);

        const editToggler = () => {
        setEditing(editing? false: true)
    }

    const [updates, setUpdates] = useState({});
 
  
    const handleChange = (e) => {
      const {name, value} = e.target
      setUpdates ({
        ...updates, [name]: value
      })
      
    }

    const editHandler = (e) => {
      e.preventDefault()
      console.log(todo._id, updates)
      editTodo(todo._id, updates)
      setEditing(false)
    }


    const id = todo._id
    return (<div>
     <label>
      <input 
      type="checkbox"
       checked={todo.isCompleted}
        id={id}
         onChange={(e)=> {
             completeTodo(e.target.id) 
              }} 
         value={""}
         ></input>
         </label>

         {todo.text}
         
        <button className="form-button"
         id="delete"
          onClick={ (e) => deleteTodo(id)}
          >
          X
          </button>

           {todo.isCompleted?
           <button className="form-button" disabled >edit</button>
           :
           <button className="form-button"
           onClick={editToggler}
            >Edit</button>} 
          {/* <button >edit</button> */}
          {editing?<div>
           <TodoForm newTodo={updates}  handleChange ={handleChange} buttonText={"EditTodo"} addTodo={editHandler} />
           <button className="form-button"
             onClick={(e) => setEditing(false)}>
              Cancel
            </button>
           </div>
          : null}

    </div>)
}
export default Todo;