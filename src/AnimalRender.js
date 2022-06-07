import React from 'react';
import './Animal/Animal.css';

export default function AnimalRender({ name, type, says, top, left }) {
  return (
    <div className='animal' style={{ top, left }}>
      <img src={`./Animal/{name}.svg`} />
      <h2 className='animal name'>{name}</h2>
      <p>{type}</p>
      <span>{says}</span>
    </div>
);
}