import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext, Value } from '../contexts/AppContext';
import { Card, MainDiv, PokemonImage, PokemonTitle, PokemonTypesColor, PokemonTypesDiv, TypeText } from '../styles/MainCardsStyle';
import { backGroundImage } from './helpers/BackGroundType';
import { ColoredTypeBackGround } from './helpers/TypeBackGround';

export const HomeComponent: React.FC = () => {
  const { pokemons, setPokemons, isLoaded, offSetPage, setOffSetPage } = useContext(AppContext) as Value;
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleCardClickToNavigate = (pokemonName: string) => {
    navigate(`/pokemon/${pokemonName}`);
  };

  const takeTypeToChangeBackGround = (firstType: any) => {
    const bgUrl = backGroundImage(firstType);
    return `url(${bgUrl})`;
  };

  const handleScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop < 
      document.documentElement.offsetHeight) {
        return ;
      }
    setTotalPages(totalPages + 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setOffSetPage(totalPages);
  }, [totalPages]);

  return (
    isLoaded ? 
    <MainDiv>
      {pokemons.map((each) => 
      <Card key={`${each.id}`} 
        onClick={() => handleCardClickToNavigate(each.name)}
        style={{ background: takeTypeToChangeBackGround(each.types[0].type.name)}}
      >
        <PokemonTitle>
          {each.name.charAt(0).toUpperCase() + each.name.slice(1)}
        </PokemonTitle>
        <PokemonImage src={each.sprites.front_default} alt={`That's ${each.name} overthere`} />
        <PokemonTypesDiv>{each.types
          .map((eachType) => 
          <PokemonTypesColor 
          style={{ backgroundColor: ColoredTypeBackGround(eachType.type.name)}}
          key={eachType.type.name}>
            <TypeText>{eachType.type.name}</TypeText>
            </PokemonTypesColor>)}
        </PokemonTypesDiv>
      </Card>)}
    </MainDiv>
    :
    <p>Carregando...</p>
  );
}