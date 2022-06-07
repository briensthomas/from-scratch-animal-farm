import React from 'react';
import AnimalRender from '../AnimalRender';
import './Main.css';
import backgroundImg from '../background.png';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})`}}>
      {
        animals.map((animal, i) => <AnimalRender
          key={animal.name + i}
          {...animal} />)
      }
    </main>
  );}