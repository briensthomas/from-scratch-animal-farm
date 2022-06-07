import React from 'react';
import './Animal/Animal.css';

export default function AnimalRender({ name, type, says, top, left }) {
  return (
    <div className='.animal' style={{ top, left }}>
      <h2>{name}</h2>
      <p>{type}</p>
      <span>{says}</span>
    </div>
);
}