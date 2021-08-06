//event handlers
//pass the two  functions as props addtodos and deletetodos

function Todo ({todo, completeTodo, deleteTodo}) {
    // console.log(todo._id)
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
    </div>)
}

export default Todo;