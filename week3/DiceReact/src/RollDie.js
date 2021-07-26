import { useState } from 'react';
import Die from './Die'
function RollDie () {
    const [dieNum, setDie] = useState(0);
    const [dieNum2, setDie2] = useState(0);
    const [rolling, setRoll] = useState(false)

    function randomGen() {
       // var random = Math.floor(Math.random() * 6);
       // console.log(random)
       // for(var i = 0; i < 50; i++){
            var random = Math.floor(Math.random() * 6) + 1;
            setRoll( true)
            console.log(random)
       // }
       setDie(random);
    

       var random2 = Math.floor(Math.random() * 6) + 1;
       setRoll( true)
        console.log(random2)

       setDie2(random2)
       

       
    }
    
   

    return (
        <div>
    

    <Die
    num = {dieNum}
    /> 

    <Die
    num = {dieNum2}
    /> 

  
    <button onClick={randomGen} >Hello</button>
        </div>

    );
}



export default RollDie;