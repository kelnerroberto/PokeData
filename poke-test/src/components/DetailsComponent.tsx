import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailedPokemons, ReturnedFromAPI } from '../API/fetchFunctions/MainFetch';
import { InitialDetailedPokemonState } from './helpers/InitialState';
import { Card, MainDiv, PokemonImage, PokemonTitle, PokemonTypesColor, PokemonTypesDiv, TypeText } from '../styles/MainCardsStyle';

export const DetailsComponent: React.FC = () => {
  const { name } = useParams();
  const detailedPokemon = async (pokeName: string | undefined) => await fetchDetailedPokemons(pokeName);
  const [pokemon, setPokemon] = useState<ReturnedFromAPI>(InitialDetailedPokemonState);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const searchedPokemon = async () => setPokemon(await detailedPokemon(name));
    searchedPokemon();
    setLoaded(true);
  }, []);

  return (
    loaded ?
    (
    pokemon.name === '' ?
    <div>
      <h3>
        Que pena, não encontramos nenhum pokémon com esse nome.
      </h3>
    </div>
    :
    <MainDiv>
        <Card key={`${pokemon.id}`}>
          <PokemonTitle>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </PokemonTitle>
          <PokemonImage src={pokemon.sprites.front_default} alt={`That's ${pokemon.name} overthere`} />
          <PokemonTypesDiv>{
          pokemon.types.map((pokemonType) => <PokemonTypesColor>
              <TypeText>{pokemonType.type.name}</TypeText>
              </PokemonTypesColor>
              )}
          </PokemonTypesDiv>
        </Card>
      </MainDiv>
    )
    :
    <p>Carregando...</p>
  )
};
