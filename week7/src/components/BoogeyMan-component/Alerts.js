import React, { useEffect } from 'react';
import { checkForWin } from './Extra-notify';

const Alerts = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkForWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = ' You got away! Good Job!';
    playable = false;
  } else if( checkForWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'The Boogeyman has found you! ';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="alerts-box" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="alerts">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again?</button>
      </div>
    </div>
  )
}

export default Alerts;