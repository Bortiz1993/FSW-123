import { useState } from 'react';
import  TodoForm from './TodoForm';

//event handlers
//pass the two  functions as props addtodos and deletetodos
///There is going to be state in the todo edit button here?

function Todo ({todo, completeTodo, deleteTodo}) {
    // console.log(todo._id)
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
         
        <button
         id="delete"
          onClick={ (e) => deleteTodo(id)}
          >
          X
          </button>

          
           {todo.isCompleted?
           <button disabled >edit</button>
           :
           <button
           onClick={editToggler}
            >Edit</button> } 
          {/* <button >edit</button> */}
          {editing? <TodoForm newTodo={updates} handleChange ={handleChange} addTodo={ () => {}} />: null}
    </div>)
}
//edit function using props and the id?
export default Todo;