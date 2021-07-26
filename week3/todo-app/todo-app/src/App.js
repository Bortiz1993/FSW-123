import { useState } from 'react';
import './App.css';
import {listoftodos} from './STORE'
import TodoList from './TodoList';
import Todo from './todo'

function App() {

  const  [todos, setTodos] = useState(listoftodos);
  const [newTodo, setNewTodo] = useState("");
 
  const handleChange = (event) => {
    event.preventDefault
    setTodos(event.target.value)
    setNewTodo(event.target.value)
  }

  const completeTodo = id => {
    const copyTodos = [...todos];
    var foundTodo = copyTodos.map(todo => {
       if ( todo._id === id){
         todo.isCompleted = (todo.isCompleted? false:true)
       }
       else {
         return (
           todo
         )
       }
        
       
     })
    setTodos(foundTodo);
  }

  //deleteTodo?
  const deleteTodo = id => {
    const copyTodos = [...todos];
    var foundTodo = copyTodos.filter(todo => {
       return  todo._id !== id  
       
     })
    setTodos(foundTodo);
  }



  return (
    <div>
  <TodoList todos = {todos} completeTodo = {completeTodo} deleteTodo = {deleteTodo}/>
      
    </div>
  );
}

export default App;