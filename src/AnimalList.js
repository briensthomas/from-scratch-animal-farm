import React from 'react';
import './Animal/Animal.css';

export default function AnimalList({ animals }) {
  return (
    <div className='animal' >
      {animals.map((animal, i) => <div key={animal.name + i} {...animal}></div>)}
    </div>
  );
}