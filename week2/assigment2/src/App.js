import './App.css';
import {todos} from './STORE';
import TodoList from './TodoList';

function App (){
  return (
    <TodoList todos = {todos}/>
  );
}
  


export default App;
