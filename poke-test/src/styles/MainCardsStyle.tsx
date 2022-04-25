import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Card = styled.div`
  margin: 0.8rem;
  display: flex;
  flex-direction: column;
  background-color: #0A285F;
  width: 15%;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const PokemonTitle = styled.h1`
  flex-wrap: wrap;
  color: #D5A100;
`;

export const PokemonTypesDiv = styled.div`
  display: flex;
  flex-direction: inline;
`;

export const PokemonTypesColor = styled.h3`
  margin: 5px;
  color: #FFCC00;
`;