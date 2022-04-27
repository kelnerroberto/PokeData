import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchDetailedPokemons, Moves, ReturnedFromAPI } from '../API/fetchFunctions/MainFetch';

import { InitialDetailedPokemonState } from './helpers/InitialState';
import { StatsAndIcons } from './helpers/IconsOfStats';

import { MainDiv, PokemonTypesColor, PokemonTypesDiv, TypeText } from '../styles/MainCardsStyle';
import { GiBodyHeight, GiWeight } from 'react-icons/gi';
import { DetailedMainDiv, DetailsPokemonWord, PokemonDetailedImage, PokemonDetailedTitle, SectionsDivs } from '../styles/DetailedStyle';
import { ColoredTypeBackGround } from './helpers/TypeBackGround';
import { UpperCaseFirstLetter } from './helpers/UpperCaseFirstLetter';

function slicePokemonsMoves(moves: Array<Moves>) {
  const allMoves = moves.map(eachPokemonMove => UpperCaseFirstLetter(eachPokemonMove.move.name));
  const sliceMovesByFive = allMoves.slice(0, 5);
  return sliceMovesByFive.map(eachPokeMove => <li>{eachPokeMove}</li>);
}
 
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
        <SectionsDivs>
         <DetailsPokemonWord>
            Habilidades:
          </DetailsPokemonWord>
          <MainDiv>
            <ul style={{ listStyle: 'inherit' }}>
              { pokemon.abilities
                .map(eachPokemonAb => <li>{UpperCaseFirstLetter(eachPokemonAb.ability.name)}</li>)
              }
            </ul>
          </MainDiv>
        </SectionsDivs>
        <SectionsDivs>
         <DetailsPokemonWord>
            Movimentos possíveis:
          </DetailsPokemonWord>
          <MainDiv>
            <ol>
              { slicePokemonsMoves(pokemon.moves)
              }
            </ol>
          </MainDiv>
        </SectionsDivs>
        <SectionsDivs>
          <DetailsPokemonWord>Características físicas do pokémon:</DetailsPokemonWord>
          <MainDiv>
            <span><GiBodyHeight/>{`${ pokemon.height * 10 }cm`}</span>
            <span><GiWeight/> { `${ pokemon.weight / 10 }kg` }</span>
          </MainDiv>
        </SectionsDivs>
        <SectionsDivs>
          <DetailsPokemonWord>Status inicial do Pokémon:</DetailsPokemonWord>
          <MainDiv>
            <ul style={{ listStyle: 'none' }}>
              { pokemon
              .stats.map((each) => 
              StatsAndIcons(each)
              )}
            </ul>
          </MainDiv>
        </SectionsDivs>
      </section>
    </DetailedMainDiv>
    )
    :
    <p>Carregando...</p>
  )
};
