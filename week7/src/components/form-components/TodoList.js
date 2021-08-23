import Todo from './todo';

function TodoList( props){
    console.log(props)
    const todoList = props.todos.map((todo, index) => <Todo completeTodo ={props.completeTodo} deleteTodo ={props.deleteTodo}  editTodo={props.editTodo}key = {index}  todo = {todo}/>)

return (
    <div>
   
     {todoList} 
    
    
    </div>

);
}



export default TodoList