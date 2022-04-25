import { ReactNode, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { fetchPokemonsForHomePage, ReturnedFromAPI } from '../API/fetchFunctions/MainFetch';

type PokemonContextProps = {
  children: ReactNode,
}

const pokemonsInitialState = {
  count: 0,
  next: '',
  previous: '',
  results: [{
    name: '',
    url: '',
  }],
}

export const PokemonProvider = ({ children }: PokemonContextProps) => {
  const [offSetPage, setOffSetPage] = useState(0);
  const [pokemons, setPokemons] = useState<ReturnedFromAPI>(pokemonsInitialState);

  useEffect(() => {
    const takeInitialPokemons = async () => setPokemons(await fetchPokemonsForHomePage(offSetPage));
    takeInitialPokemons();
  }, []);

  return( 
  <AppContext.Provider value={{ offSetPage, pokemons }}>
    {children}
  </AppContext.Provider> )
};