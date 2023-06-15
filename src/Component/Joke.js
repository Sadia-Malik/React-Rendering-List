// Joke.js
import React from 'react';

const Joke = ({ content, rating }) => {
  return (
    <div className=''>
      <p>{content}</p>
      <div>
        {[...Array(rating)].map((_, index) => (
          <span key={index}>⭐️</span>
        ))}
      </div>
    </div>
  );
};

export default Joke;
