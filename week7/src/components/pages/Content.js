import BoogeyMan from "../BoogeyMan-component/BoogeyMan";
import WrongLetters from "../BoogeyMan-component/WrongLetters";
import Word from "../BoogeyMan-component/Word";
import Alerts from "../BoogeyMan-component/Alerts";
import Notification from "../BoogeyMan-component/Notification";
import {showNotification as show, checkForWin} from '../BoogeyMan-component/Extra-notify'
import { useState, useEffect } from "react";



const words = ['website', 'javascript', 'react', 'node'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function Content() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  //if you want to play again function.
  function playAgain() {
    setPlayable(true);

    // These are the Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

    return( 
    <div>
    <div className="main-box">
    <h1 style={{marginLeft: "75px", marginTop:"45px"}}>Solve the correct word! or else...</h1>
    <BoogeyMan wrongLetters={wrongLetters}/>
    <WrongLetters wrongLetters={wrongLetters}/> 
    <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
    </div>
    <Alerts correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
    <Notification showNotification={showNotification} checkForWin={checkForWin}/>
    
    </div>
    );
}

export default Content;