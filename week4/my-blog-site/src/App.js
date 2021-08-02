import {BrowserRouter} from 'react-router-dom'
import Header from './components/container/Header';
import Body from './components/container/Body';
import './App.css';



function App() {

  return (
    <BrowserRouter >
   <Header/>
      <Body/>
      
    </BrowserRouter>
  
  );
}

export default App;
