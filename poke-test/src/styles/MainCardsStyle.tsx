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
    box-shadow: inset 0 0 0.8em #c29b00, 0 0 0.8em #fdd430;
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
  padding: 0.4rem;
  border-radius: 0.5rem;
  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const TypeText = styled.span`
  font-size: 1rem;
`;

export const BodyHomeStyle = styled.div`
  background-image: linear-gradient(0deg, rgba(166,166,166,1) 0%, rgb(230, 230, 230) 29%);
`;
