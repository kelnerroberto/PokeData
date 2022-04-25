import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { Card, PokemonTitle, PokemonTypes } from '../styles/MainCardsStyle';

export const HomeComponent: React.FC = () => {
  const { pokemons, isLoaded } = useContext(AppContext);

  return (
    isLoaded ? 
    <main>
      {pokemons.map((each) => 
      <Card key={`${each.id}`}>
        <PokemonTitle>
          {each.name.charAt(0).toUpperCase() + each.name.slice(1)}
        </PokemonTitle>
        <img src={each.sprites.front_default} alt={`That's ${each.name} overthere`} />
        {each.types.map((eachType) => <PokemonTypes>{eachType.type.name}</PokemonTypes>)}
      </Card>)}
    </main>
    :
    <p>Carregando...</p>
  );
}