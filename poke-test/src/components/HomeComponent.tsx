import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

export const HomeComponent: React.FC = () => {
  const { pokemons } = useContext(AppContext);

  return (
    <div>
      <ul>
      { pokemons.results.map((eachPokemon) => <li>{eachPokemon.name}</li>) }
      </ul>
    </div>
  );
}