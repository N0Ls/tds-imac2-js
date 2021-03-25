import React, { useEffect, useState } from 'react';

import './ex4.css';
import Hero from './Hero';

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  }, []);
  console.log(superheroes);
  const MySuperHeroArray = superheroes.filter((hero) => hero.powerstats.speed > 80);

  return (
    MySuperHeroArray.map((MyHero) => (
      <Hero
        name={MyHero.name}
        speed={MyHero.powerstats.speed}
        height={MyHero.appearance.height[1]}
      />
    ))
  );
};
