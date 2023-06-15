// JokeList.js
import React from 'react';
import Joke from './Joke';
import './Joke.css';

const JokeList = () => {
  const jokes = [
    { id: 1, content: 'Why don’t scientists trust atoms? Because they make up everything!', rating: 4 },
    { id: 2, content: 'Why did the scarecrow win an award? Because he was outstanding in his field!', rating: 5 },
    { id: 3, content: 'What do you call a fish with no eyes? Fsh!', rating: 3 },
    { id: 4, content: 'I used to play piano by ear, but now I use my hands.', rating: 2 },
    { id: 5, content: 'Did you hear about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them.', rating: 4 },
  ];

  return (
    <div className='box text-center'>
        <div className='col-lg-4 col-md-4 col-sm-12'>
      <h2>Rendering list</h2>
      {jokes.map((joke) => (
        <Joke key={joke.id} content={joke.content} rating={joke.rating} />
      ))}
    </div>
    </div>
  );
};

export default JokeList;
