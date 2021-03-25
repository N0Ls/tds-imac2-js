import React from 'react';

const Hero = ({ name, speed, height }) => (
  <div>
    <h1>{name}</h1>
    <h2>{speed}</h2>
    <p>{height}</p>
  </div>
);

export default Hero;
