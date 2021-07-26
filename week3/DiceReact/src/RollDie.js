import { useState } from 'react';
import Die from './Die'
import './RollDice.css'

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

       setTimeout(() => {
        setRoll(false)
       },1000)  
    }
    
    return (
        <div className='RollDice'>
        <div className='RollDice-container'>
        
    <Die
    num = {dieNum}
    /> 

    <Die
    num2 = {dieNum2}
    /> 
        </div>
  
    <button className="RollDice-Button" onClick={randomGen} >Roll Dice</button>
        </div>

    );
}

export default RollDie;