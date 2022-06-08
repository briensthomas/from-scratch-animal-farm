import React from 'react';
import './index.css';
import './Animal.css';

export default function Animal({ name, type, says, top, left }) {
  return (
    <div className='animal' style={{ position: 'absolute',
      top: { top }, left: { left } }}>
      <img src={`/${type}.svg`} />
      <h2> {name} </h2>
      <span>{says}</span>
    </div>
  );
}