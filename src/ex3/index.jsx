import React from 'react';
import Fish from './Fish';

// eslint-disable-next-line import/prefer-default-export
export const ExerciseThreePage = () => {
  let fishLength = 1;
  return(
  <main>
    <Fish size={fishLength}/>
    <button onClick={() => fishLength--}>-</button>
    <button onClick={() => fishLength++}>+</button>
  </main>
  )
};
