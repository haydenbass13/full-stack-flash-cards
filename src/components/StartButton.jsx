import React from 'react';

const StartButton = props => {
  return (
    <button className='startButton' onClick={props.gameStart}>Start!</button>
  )
}

export default StartButton;