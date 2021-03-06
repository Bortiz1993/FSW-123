import { useState } from 'react';
import './App.css';
import {listOfToDos} from './STORE'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from "uuid";


function App() {
//edit handler function
  const  [todos, setTodos] = useState(listOfToDos);
  const [newTodo, setNewTodo] = useState({});
 
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setNewTodo ({
      ...newTodo, [name]: value
    })
    
  }

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
  const addTodo = e => {
    e.preventDefault()
    console.log(newTodo)
   const copyTodo = [...todos,  {
    _id: uuidv4(),
    ...newTodo,
    isCompleted: false
}];
    setTodos(copyTodo) 
  };

  //editTodo function here.
  
  const editTodo = (id, updateTodo) => {
    console.log(id, updateTodo)
    const copyTodo = [...todos].map((todo) => {
      //console.log(todo.id)
      if (todo._id === id) {
        todo.text = updateTodo.text
      }
      return todo;
    })
    setTodos(copyTodo)
  };

  return (
    <div>
     <TodoForm newTodo = {newTodo} handleChange= {handleChange} buttonText={"AddTodo"} addTodo = {addTodo}/>
  <TodoList todos = {todos} completeTodo = {completeTodo} deleteTodo = {deleteTodo} editTodo={editTodo}/>
 
  

      
    </div>
  );
}

export default App;
