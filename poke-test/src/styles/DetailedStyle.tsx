import styled from "styled-components";

export const DetailedMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #F0F0F0;
  padding-bottom: 1rem;
`

export const PokemonDetailedTitle = styled.h2`
  align-self: center;
  padding: 8px;
`;

export const DetailsPokemonWord = styled.h3`
  align-self: center;
  margin: 5px;
`;

export const DetailedSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #F0F0F0;
`;

export const PokemonDetailedTypesDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: inline;
  justify-content: space-around;
  align-content: center;
  padding-top: 18px;
`;

export const PokemonDetailedTypesColor = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;


export const AbilitiesAndMovesDiv = styled.div`
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 1rem;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 12px;
`;

export const AbilitiesDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
  padding: 1rem;
  border-radius: 5%;
`;

export const MovesDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
  padding: 1rem;
  border-radius: 5%;
`

export const DivList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const PhysicalCharacteristics = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const SectionsDivs = styled.div`
  display: inline-block;
  align-self: center;
  flex-wrap: wrap;
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
  margin: 1rem;
  padding: 1rem;
  border-radius: 5%;
`

export const PokemonDetailedImage = styled.img`
  object-fit: cover;
  max-width: 250px;
`;

export const PokemonImageDiv = styled.div`
  border-radius: 30%;
  padding: 35px;
  background-color: #000000;
background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
`

export const BackToHomePageButton = styled.a`
  cursor: pointer;
  margin: 2rem;
  span {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const DetailedHeader = styled.header`
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #87898C;
`
