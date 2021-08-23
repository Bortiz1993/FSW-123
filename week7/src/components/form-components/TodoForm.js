function TodoForm ({addTodo, handleChange, buttonText, newTodo}) {
        return (
            <>
            <form onSubmit={addTodo}  name="todo-form" method="POST">
            <input name="text" type="text" value={newTodo.text} onChange={handleChange} required></input>
            {newTodo.text?
               <button className="form-button" >{buttonText}</button>
               :
               <button disabled>{buttonText}</button>
                
                } 
            
            </form>
            </>
        )
        
    }
    
    export default TodoForm