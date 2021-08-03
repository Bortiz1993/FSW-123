
//define the function handleChange here//
function TodoForm (props) {

 
    // const handleChange = (event) => {
    //     event.preventDefault()
    //     setTodos(event.target.value)
    //     setNewTodo(event.target.value)
    //   }

    console.log(props)
    return (
        <form onSubmit ={props.handleChange} name="todo-form" method="POST">
        <input onChange={props.handleChange} type="text" value={props.value}></input>
        <button type="Submit">Submit</button>
        </form>

    )
}

export default TodoForm