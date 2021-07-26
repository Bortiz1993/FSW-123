//render the die
import { faDiceOne, faDiceTwo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



//const camera = icon({ prefix: 'fas', iconName: 'camera' })
//console.log(camera)
const dice1 = <FontAwesomeIcon icon ={faDiceOne} />

function Die (props) {
    return (
        <div> {props.num === 1? (dice1) : ""}
        </div>
    );
}



export default Die;
