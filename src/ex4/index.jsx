import React, { useEffect, useState } from 'react';

import Hero from './Hero';
import './ex4.css';

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  }, []);
  const predicate = (hero) => {
    const height = hero.appearance.height[1].split(' ');
    const heightInt = parseInt(height[0], 10);

    return (hero.powerstats.speed > 80) && heightInt > 0;
  };
  const MySuperHeroArray = superheroes.filter((hero) => predicate(hero));
  console.log(MySuperHeroArray);

  return (
    MySuperHeroArray.map((MyHero) => (
      <Hero
        name={MyHero.name}
        imgURL={MyHero.images.sm}
        speed={MyHero.powerstats.speed}
        height={MyHero.appearance.height[1]}
      />
    ))
  );
};
