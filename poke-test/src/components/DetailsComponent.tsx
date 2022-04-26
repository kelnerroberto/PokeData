import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailedPokemons, ReturnedFromAPI } from '../API/fetchFunctions/MainFetch';
import { InitialDetailedPokemonState } from './helpers/InitialState';
import { Card, MainDiv, PokemonImage, PokemonTitle, PokemonTypesColor, PokemonTypesDiv, TypeText } from '../styles/MainCardsStyle';
import { backGroundImage } from './helpers/BackGroundType';
import { GiBodyHeight, GiWeight } from 'react-icons/gi';
import { StatsAndIcons } from './helpers/IconsOfStats';
 
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

  const takeTypeToChangeBackGround = (firstType: any) => {
    const bgUrl = backGroundImage(firstType);
    return `url(${bgUrl})`;
  };

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
    <div>
      <h2>{`#${pokemon.id}`}</h2>
      <MainDiv>
          <Card 
          key={`${pokemon.id}`}
          style={{ background: takeTypeToChangeBackGround(pokemon.types[0].type.name)}}
          >
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
      <section>
        <div>
          Habilidades:
        </div>
        <div>
          <p><strong>Características físicas do pokémon:</strong></p>
          <MainDiv>
            <span><GiBodyHeight/>{`${ pokemon.height * 10 }cm`}</span>
            <span><GiWeight/> { `${ pokemon.weight / 10 }kg` }</span>
          </MainDiv>
        </div>
        <div>
          <p><strong>Status inicial do Pokémon:</strong></p>
          <MainDiv>
            <ul style={{ listStyle: 'none' }}>
              { pokemon
              .stats.map((each) => 
              StatsAndIcons(each)
              )}
            </ul>
          </MainDiv>
        </div>
      </section>
    </div>
    )
    :
    <p>Carregando...</p>
  )
};
