import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { Card, MainDiv, PokemonImage, PokemonTitle, PokemonTypesColor, PokemonTypesDiv } from '../styles/MainCardsStyle';

export const HomeComponent: React.FC = () => {
  const { pokemons, isLoaded } = useContext(AppContext);

  return (
    isLoaded ? 
    <MainDiv>
      {pokemons.map((each) => 
      <Card key={`${each.id}`}>
        <PokemonTitle>
          {each.name.charAt(0).toUpperCase() + each.name.slice(1)}
        </PokemonTitle>
        <PokemonImage src={each.sprites.front_default} alt={`That's ${each.name} overthere`} />
        <PokemonTypesDiv>{each.types
          .map((eachType) => <PokemonTypesColor>{eachType.type.name}</PokemonTypesColor>)}
        </PokemonTypesDiv>
      </Card>)}
    </MainDiv>
    :
    <p>Carregando...</p>
  );
}