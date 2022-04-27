import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Abilities, fetchDetailedPokemons, ReturnedFromAPI } from '../API/fetchFunctions/MainFetch';

import { InitialDetailedPokemonState } from './helpers/InitialState';
import { backGroundImage } from './helpers/BackGroundType';
import { StatsAndIcons } from './helpers/IconsOfStats';

import { MainDiv, PokemonTypesColor, PokemonTypesDiv, TypeText } from '../styles/MainCardsStyle';
import { GiBodyHeight, GiWeight } from 'react-icons/gi';
import { DetailedMainDiv, PokemonDetailedImage, PokemonDetailedTitle } from '../styles/DetailedStyle';
import { ColoredTypeBackGround } from './helpers/TypeBackGround';
import { UpperCaseFirstLetter } from './helpers/UpperCaseFirstLetter';
 
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
    <MainDiv>
      <h3>
        Que pena, não encontramos nenhum pokémon com esse nome.
      </h3>
    </MainDiv>
    :
    <DetailedMainDiv>
      <PokemonDetailedTitle>{`#${pokemon.id}: ${UpperCaseFirstLetter(pokemon.name)}`}</PokemonDetailedTitle>
      <MainDiv>
            <PokemonDetailedImage src={pokemon.sprites.other.home.front_default} alt={`That's ${pokemon.name} overthere`} />
            <PokemonTypesDiv>{
            pokemon.types.map((pokemonType) => 
            <PokemonTypesColor style={{ backgroundColor: ColoredTypeBackGround(pokemonType.type.name)}}>
              <TypeText>{pokemonType.type.name}</TypeText>
            </PokemonTypesColor>
                )}
            </PokemonTypesDiv>
      </MainDiv>
      <section>
        <div>
         <p>
            <strong>
            Habilidades:
            </strong>
          </p>
          <MainDiv>
            <ul style={{ listStyle: 'inherit' }}>
              { pokemon.abilities
                .map(eachPokemonAb => <li>{UpperCaseFirstLetter(eachPokemonAb.ability.name)}</li>)
              }
            </ul>
          </MainDiv>
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
    </DetailedMainDiv>
    )
    :
    <p>Carregando...</p>
  )
};
