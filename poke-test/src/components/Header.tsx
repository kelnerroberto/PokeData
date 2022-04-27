import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputContainer, SearchButton, SearchContainer, SearchInput } from "../styles/HeaderStyle";

import { AiOutlineSearch } from 'react-icons/ai'

export const HeaderComponent: React.FC = () => {
  const [pokemonSearched, setPokemonSearched] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget.value;
    setPokemonSearched(target);
  }

  const handleClick = () => {
    const pokemonSearchedToLowerCase = pokemonSearched.toLowerCase();
    navigate(`/pokemon/${pokemonSearchedToLowerCase}`);
  }

  return (
      <SearchContainer>
        <div></div>
        <InputContainer>
        <SearchInput
          type='text'
          onChange={(event) => handleSearchChange(event)}
          placeholder="Procure por um pokémon..."
          onFocus={(event) => event.target.placeholder = "" }
          onBlur={(event) => event.target.placeholder = "Procure por um pokémon..."}
        />
        <SearchButton type="button" onClick={() => handleClick()}>
          <AiOutlineSearch />
        </SearchButton>
        </InputContainer>
        <div></div>
      </SearchContainer>
  )
};
