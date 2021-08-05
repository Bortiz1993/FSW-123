import { useState } from 'react';
import './App.css';
import {listOfToDos} from './STORE'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {

  const  [todos, setTodos] = useState(listOfToDos);
  const [newTodo, setNewTodo] = useState([]);
 
  
 // const handleChange = (event) => {
   // event.preventDefault()
   // setTodos(event.target.value)
   // setNewTodo(event.target.value)
  //}

  const completeTodo = id => {
    const copyTodos = [...todos];
    var foundTodo = copyTodos.map(todo => {
      console.log(todo._id)
       if ( todo._id === id){
         todo.isCompleted = (todo.isCompleted? false:true)
         return todo
       }
       else {
         return (
           todo
         )
       }
        
       
     })
     console.log(foundTodo)
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

  //addTodo finish this function
  const addTodo = text => {
    const copyTodo = [...newTodo, {text}];
    setNewTodo(copyTodo) 
  };



  return (
    <div>
  <TodoList todos = {todos} completeTodo = {completeTodo} deleteTodo = {deleteTodo}/>
  <TodoForm  addTodo = {addTodo}/>
  

      
    </div>
  );
}

export default App;
