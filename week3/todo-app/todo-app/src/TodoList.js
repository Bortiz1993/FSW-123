//do the map
import todo from './todo';

function TodoList({todos, props}){
    const todoList = todos.map((Todo, index) => <div key = {index}>{Todo}</div>);


return (
    <div>
    <label>Todos <input type="text" value={todoList}></input></label>
    
    
    </div>

);
}



export default TodoList