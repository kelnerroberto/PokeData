import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

export const HomeComponent: React.FC = () => {
  const { pokemons } = useContext(AppContext);

  return (
    <div>
      <p>{pokemons.map(each => each.height)}</p>
    </div>
  );
}