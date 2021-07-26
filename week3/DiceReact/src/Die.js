//render the die
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Die.css'



//const camera = icon({ prefix: 'fas', iconName: 'camera' })
//console.log(camera)
const dice1 = <FontAwesomeIcon className ='DieShaking' icon ={faDiceOne} />
const dice2 = <FontAwesomeIcon className= 'DieShaking' icon ={faDiceTwo} />
const dice3 =  <FontAwesomeIcon className = 'DieShaking' icon ={faDiceThree}/> 
const dice4 = <FontAwesomeIcon className = 'DieShaking' icon = {faDiceFour}/>
const dice5 = <FontAwesomeIcon className = 'DieShaking' icon = {faDiceFive}/>
const dice6 = <FontAwesomeIcon className = 'DieShaking' icon = {faDiceSix}/>

function Die (props) {
    return (
   <div> {props.num === 1? (dice1) : "" || props.num === 2? (dice2): "" || props.num ===3 ? (dice3): ""|| props.num === 4?(dice4):"" || props.num === 5?(dice5):"" || props.num === 6? (dice6):""}
      {props.num2 === 1? (dice1): "" || props.num2 === 2?(dice2): "" || props.num2 === 3? (dice3):"" || props.num2 === 4?(dice4):"" || props.num2 === 5?(dice5):"" || props.num2 === 6?(dice6):""}

        </div>
    );
}



export default Die;
