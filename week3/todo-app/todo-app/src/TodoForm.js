import { useState } from 'react';
//define the function handleChange here//
function TodoForm ({addTodo}) {
    const [value, setValue] = useState([]);

     const handleSubmit = (e) => {
       e.preventDefault();
       if (!value) return;
       addTodo(value);
       setValue("");
  };
  console.log(value)
  console.log({addTodo})

  
    return (
        <>
        <form onSubmit ={handleSubmit} name="todo-form" method="POST">
        <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
        <button type="Submit">add Todo</button>
        </form>
        {value && <ul><li>Name:</li></ul>}
        </>
    )
    
}

export default TodoForm