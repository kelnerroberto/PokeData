import styled from "styled-components";

export const DetailedMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PokemonDetailedTitle = styled.h2`
  align-self: center;
`;

export const DetailsPokemonWord = styled.h4`
  align-self: center;
  margin: 5px;
`;

export const SectionsDivs = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.8rem;
  background-color: rgb(255,200,255);
`

export const PokemonDetailedImage = styled.img`
  object-fit: cover;
  max-width: 250px;
`;

export const BackToHomePageButton = styled.a`
  cursor: pointer;
  margin: 2rem;
  span {
    font-size: 18px;
  }
`;

export const DetailedHeader = styled.header`
  margin-top: 5px;
`
