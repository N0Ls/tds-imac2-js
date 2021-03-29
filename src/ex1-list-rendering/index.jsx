import React from 'react';

// eslint-disable-next-line no-unused-vars
import movies from './movies.json';

// eslint-disable-next-line import/prefer-default-export
export const ListRenderingExercise = () => (
  <div>
    {movies.map(({ title, storyline, year }) => (
      <>
        <h2 key={title}>
          {title}
          ,
          was released in
          {year}
        </h2>
        <p>{storyline}</p>
      </>
    ))}
  </div>

);
