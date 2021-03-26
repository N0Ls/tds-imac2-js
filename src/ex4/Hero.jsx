import React from 'react';

const Hero = ({
  name,
  speed,
  height,
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
  </div>
);

export default Hero;
