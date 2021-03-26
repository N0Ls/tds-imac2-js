import React from 'react';

const Hero = ({
  name,
  speed,
  height,
  weight,
  imgURL,
}) => (
  <div className="hero">
    <h2>{name}</h2>
    <img src={imgURL} alt="" />
    <p className="speed">
      Speed :
      {speed}
    </p>
    <p>{height}</p>
    <p>{weight}</p>
  </div>
);

export default Hero;
