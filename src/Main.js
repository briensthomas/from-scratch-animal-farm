import React from 'react';
import backgroundImg from './background.png';
import AnimalList from './AnimalList';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      <AnimalList animals={animals} />
    </main>
  );}