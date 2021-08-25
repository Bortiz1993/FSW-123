import axios from 'axios'
import {useState, useEffect} from 'react'
import './App.css';
// import TodoList from './TodoList';

let defaultImg;
let dogImage;


function App() {

  //initial image value state
  const [image, setImage] = useState("cat");
  const [inputValue, setInputValue] = useState({});

  //var dog = "dog"
  //console.log("something" + dog)

  const handleChange = (e) => {
    const {name, value} = e.target
    setInputValue ({
      ...inputValue, [name]: value
    })
    
  }

  const getCat = () => {
  axios.get('http://api.giphy.com/v1/gifs/search?api_key=z5PuuVRkHUfBv46ylpPQRFJ409vktpmG&limit=1&q=cat')
  .then(response => { setImage(response.data)
   
  })
  .catch(err => console.log(err))
}



const getDog = () => {
  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=z5PuuVRkHUfBv46ylpPQRFJ409vktpmG&limit=1&q=${inputValue.text}`)
  .then(response => {
    console.log(response)
    setImage(response.data)
  } )
  .catch(err => console.log(err))
}

  useEffect(() => {
    getCat();

  }, [])

  const onClick = (e) => {
    getDog()
    
  }
console.log(image)

  try {
    defaultImg = image.data[0].images.downsized.url
  
    dogImage = image.data[1].images.downsized.url
   
  }
  
  catch {

  }


  return (
    
    
    <div>
       <input name="text" type="text" value={inputValue.text} onChange={handleChange} required></input>
       <button onClick={onClick}>Button</button>
      <img src={defaultImg} alt='' />
      <img src={dogImage} alt=''/>
    

  
  </div>

  
  );
  
}

export default App;
