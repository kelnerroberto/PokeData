import styled from 'styled-components';

export const PokemonImage = styled.img`
  object-fit: cover;
  max-width: 80px;
`

export const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const Card = styled.div`
  margin: 0.8rem;
  display: flex;
  flex-direction: column;
  width: 230px;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    
  }
`;

export const PokemonTitle = styled.h1`
  flex-wrap: wrap;
  color: rgb(255,255,255);
`;

export const PokemonTypesDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: inline;
  justify-content: space-around;
`;

export const PokemonTypesColor = styled.div`
  background-color: #fff;
  padding: 0.4rem;
  border-radius: 0.5rem;
`;

export const TypeText = styled.span`
  font-size: 1rem;
`;

export const BodyHomeStyle = styled.body`
  background-image: linear-gradient(0deg, rgba(166,166,166,1) 0%, rgb(230, 230, 230) 29%);
`;
