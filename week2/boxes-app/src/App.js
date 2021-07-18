import './App.css';
import PropsData from './PropsData';

function App(){
  return (
    <div className = "mainBox">
    <PropsData title = "My Title 1"
              subTitle = "Sub Title 1"
              description = "Hello World"
              bgColor = "red"
              width = "175px"
            
    />
      <PropsData title = "My Title 2"
              subTitle = "Sub Title 2"
              description = "Hello World 2"
              bgColor = "orange"
              width = "175px"
    />
    <PropsData title = "My Title 3"
             subTitle = "Sub Title 3"
             description = "Hello World 3"
             bgColor = "yellow"
             width = "175px"
             />
    <PropsData title = "My Title 4"
             subTitle = "Sub Title 4"
             description = "Hello World 4"
             bgColor = "green"
             width = "175px"
             />

    </div>

  );
  }



export default App;
