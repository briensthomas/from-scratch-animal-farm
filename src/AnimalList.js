import React from 'react';
import './Animal.css';
import Animal from './Animal';

export default function AnimalList({ animals }) {
  return (
    <div className='animal' >
      {
        animals.map((animal, i) => <Animal 
          {...animal}
          key={animal.name + i} />
        )}
    </div>
  );
}