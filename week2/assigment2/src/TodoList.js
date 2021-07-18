

function TodoList ({todos}){

const listItems = todos.map((todo =>{
return (
<div key = {todo.id}>
<li>{todo.text}</li>

</div>
);
}));

return (
<ul>{listItems}</ul>
);
}





export default TodoList