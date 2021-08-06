//import { useState } from 'react';
// //define the function handleChange here//
// function TodoForm ({addTodo}) {
//     const [value, setValue] = useState([]);

//      const handleSubmit = (e) => {
//        e.preventDefault();
//        if (!value) return;
//        addTodo(value);
//        setValue("");
//   };
//   console.log(value)
//   console.log({addTodo})
function TodoForm ({addTodo, handleChange, newTodo}) {
    
console.log()
    return (
        <>
        <form onSubmit={addTodo}  name="todo-form" method="POST">
        <input name="text" type="text" value={newTodo.text} onChange={handleChange} required></input>
        <button type="Submit">add Todo</button>
        </form>
        {/* {te && <ul><li>Name:</li></ul>} */}
        </>
    )
    
}

export default TodoForm