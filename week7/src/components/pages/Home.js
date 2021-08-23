import { useState } from 'react';
import {dataArray} from '../form-components/data'
import TodoList from '../form-components/TodoList';
import TodoForm from '../form-components/TodoForm';
import {v4 as uuidv4} from "uuid";


function Home() {
    //edit handler function
      const  [todos, setTodos] = useState(dataArray);
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
        <div className="form-container">
        <h2>Welcome new players, to Boogeyman!</h2>
        <h4>Please fill out your info and proceed to "Content"</h4>
         <TodoForm newTodo = {newTodo} handleChange= {handleChange} buttonText={"AddTodo"} addTodo = {addTodo}/>
      <TodoList todos = {todos} completeTodo = {completeTodo} deleteTodo = {deleteTodo} editTodo={editTodo}/>    
        </div>
      );
    }    
    export default Home; 
